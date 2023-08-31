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

  const session = await axios.post(process.env.CAPITAL_URI + "/api/v1/session", { identifier: user.email, password: user.password }, { headers: { "X-CAP-API-KEY": user.apollox_key } });
  const cst = session.headers["CST"];
  const token = session.headers["X-SECURITY-TOKEN"];

  const config = {
    headers: {
      "X-SECURITY-TOKEN": token,
      "CST": cst
    }
  }

  const data = {
    newClientOrderId: orderId,
    epic: symbol,
    side: direction,
    size: quantity,
  }

  try{
    const order_response = await axios.post(process.env.CAPITAL_URI + "/fapi/v1/positions", data, config);
    res.status(200).json(order_response.data["dealReference"]);
  }
  catch(error: any) {
    res.status(error.response.status).end(error.response.data.msg);
  }
}
  