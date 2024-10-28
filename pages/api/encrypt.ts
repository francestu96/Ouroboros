import zlib from 'zlib';
import crypto from 'crypto';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "This API call only accepts POST methods" });
    }

    const { privKey } = req.body;
    const valid = privKey.match(/^(0x)?[0-9a-fA-F]{64}$/);

    if (!valid){
        return res.status(500).json({ error: "Not valid private key" });
    }

    const compressed = zlib.deflateSync(valid[0]);
    const key = process.env.KEY || "";
    const iv = process.env.IV || "";

    const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv));
    let encrypted = cipher.update(compressed);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    const authKey = encrypted.toString('base64');

    return res.status(200).json({ authKey })
}
