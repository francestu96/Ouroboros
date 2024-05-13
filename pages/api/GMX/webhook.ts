import zlib from 'zlib';
import crypto from 'crypto';
import type { NextApiRequest, NextApiResponse } from "next";

function decrypt(auth: string){
    const encryptedData = Buffer.from(auth, 'base64');

    const key = process.env.KEY || "";
    const iv = process.env.IV || "";

    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
    let decrypted = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return zlib.inflateSync(decrypted).toString();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "This API call only accepts POST methods" });
    }

    const { auth, orderId, symbol, action, size } = req.body;

    const missing = [{ auth }, { orderId }, { symbol }, { action }, { size }].filter((x: any) => !x[Object.keys(x)[0]]);
    if (missing.length > 0) {
        return res.status(500).json({ error: "Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", ") });
    }

    try{
        const privKey = decrypt(auth);
        return res.status(200).json({ privKey })
    }
    catch (error){
        return res.status(200).json({ error: "Not valid Auth Key" })
    }
}
