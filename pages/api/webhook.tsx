import axios, { AxiosError } from 'axios';
import User from 'model/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/dbConnect';
import crypto from 'crypto';

function signKey(key: string, data: string) {
  const bufferArray = new TextEncoder().encode(key);
  return crypto.createHmac('sha256', bufferArray).update(data).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(500).json({ error: "This API call only accepts POST methods" });
  }

  const { auth, orderId, symbol, action, size } = req.body;    

  await dbConnect();
  const user = await User.findOne({ auth: auth });
  if (!user) {
    return res.status(500).json({ error: "User authentication not found" });
  }

  const data = {
    newClientOrderId: orderId,
    symbol: symbol,
    side: action,
    type: "MARKET",
    quantity: size,
    recvWindow: "10000",
    timestamp: new Date().getTime().toString()
  }
  
  const signed_data = {
    ...data,
    signature: signKey(user.apollox_secret, new URLSearchParams(data).toString())
  }
  
  const config = {
    headers: {
      "X-MBX-APIKEY": user.apollox_key
    },
    params: signed_data
  }

  try{
    await axios.post(process.env.APOLLOX_URI + "/fapi/v1/order", null, config);
    res.status(200).end();
  }
  catch(error: any) {
    res.status(error.response.status).end(error.response.data.msg);
  }
}
  