import axios from 'axios';
import User from 'model/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/dbConnect';
import crypto from 'crypto';

function signKey(key: string, data: string) {
  const bufferArray = new TextEncoder().encode(key);
  return crypto.createHmac('sha256', bufferArray).update(data);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(200).json({ error: "This API call only accepts POST methods" });
  }

  const { auth, orderId, symbol, direction, quantity } = req.body;    

  await dbConnect();
  const user = await User.findOne({ auth: auth });
  if (!user) {
    return { error: "User authentication not found" };
  }

  const config = {
    headers: {
      "X-MBX-APIKEY": user.apollox_key
    }
  }

  const data = {
    newClientOrderId: orderId,
    symbol: symbol,
    side: direction,
    type: "MARKET",
    quantity: quantity,
    timestamp: new Date().getTime().toString()
  }
  
  const signed_data = {
    ...data,
    signature: signKey(user.apollox_secret, new URLSearchParams(data).toString()) 
  }

  const order_response = await axios.post(process.env.APOLLOX_URI + "/fapi/v1/order", signed_data, config)
}
  