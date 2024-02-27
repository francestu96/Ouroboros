import User from 'model/User';
import dbConnect from 'utils/dbConnect';
import { Connection } from "@solana/web3.js";
import type { NextApiRequest, NextApiResponse } from 'next';
import { Wallet, loadKeypair, DriftClient, PositionDirection, OrderType } from "@drift-labs/sdk";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "This API call only accepts POST methods" });
    }

    const { auth, orderId, symbol, action, size } = req.body;

    const missing = [{ auth }, { orderId }, { symbol }, { action }, { size }].filter((x: any) => !x[Object.keys(x)[0]]);
    if (missing.length > 0) {
        return res.status(500).json({ error: "Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", ") });
    }

    await dbConnect();
    const sanitize = require('mongo-sanitize');
    const user = auth ? await User.findOne({ auth: sanitize(auth) }) : undefined;
    if (!user) {
        return res.status(401).json({ error: "User authentication not found" });
    }

    // mainnet: https://api.mainnet-beta.solana.com
    const connection = new Connection('https://api.devnet.solana.com');

    // DO NOT USE wallet
    const wallet = new Wallet(loadKeypair(user.drift_priv_key))

    const driftClient = new DriftClient({
        connection,
        wallet,
        // env: 'mainnet-beta',
        env: 'devnet',
    });

    driftClient.subscribe();

    try{
        const orderParams = {
            userOrderId: orderId,
            orderType: OrderType.MARKET,
            marketIndex: 0,
            direction: action.toLowerCase() == "buy" ? PositionDirection.LONG : PositionDirection.SHORT,
            baseAssetAmount: driftClient.convertToPerpPrecision(size),
            auctionDuration: 60,
            maxTs: Date.now() + 100000,
        }
        await driftClient.placePerpOrder(orderParams);
        return res.status(200).end();
    }
    catch (error: any) {
        return res.status(error.response.status).json({ error: error.response.data });
    }
}
