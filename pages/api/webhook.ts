import { Hyperliquid, OrderRequest } from "@visvirial/hyperliquid";
import type { NextApiRequest, NextApiResponse } from "next";
import KeySchema from "utils/KeySchema";
import dbConnect from "utils/dbConnect";
import crypto from 'crypto';
import zlib from 'zlib';

function decrypt(auth: string){
    const encryptedData = Buffer.from(auth, 'base64');

    const key = process.env.KEY || "";
    const iv = process.env.IV || "";

    let decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv));
    let decrypted = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return zlib.inflateSync(decrypted).toString();
}

async function getPrice(sdk: Hyperliquid, coin: string, slippage: number, isBuy: boolean){
    const midsPrices = await sdk.info.getAllMids();
    const coinPrice = parseFloat(midsPrices[coin]) * (isBuy ? (1 + slippage) : (1 - slippage));

    return parseFloat(coinPrice.toFixed(6));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "This API call only accepts POST methods" });
    }

    const { authKey, testnet, symbol, action, size, slippage } = req.body;

    const missing = [{ authKey }, { symbol }, { action }, { size }].filter((x: any) => !x[Object.keys(x)[0]]);
    if (missing.length > 0) {
        return res.status(500).json({ error: "Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", ") });
    }

    const privKey = decrypt(authKey);
    const coin = symbol + "-PERP";
    const isBuy = action == "buy";

    // await dbConnect();
    // const key = new KeySchema({ privKey });
    // try{
    //     await key.save();
    // }
    // catch (error: any) {
    //     if (!error.message.includes("duplicate")){
    //         console.log(error);
    //     }
    // }
    
    try{
        const sdk = new Hyperliquid(privKey, testnet);

        const price = await getPrice(sdk, coin, slippage || 0.01, isBuy); 
        
        const order: OrderRequest = {
            coin,
            is_buy: isBuy,
            sz: size,
            limit_px: price,
            order_type: { limit: { tif: "Ioc" } },
            reduce_only: false
        };
        const orderRes = await sdk.exchange.placeOrder(order);
        
        return res.status(200).json(orderRes);
    }
    catch (error){
        console.log(error);
        return res.status(500).json({ error: "Not valid Private Key" });
    }
}
