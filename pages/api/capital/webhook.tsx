import axios from 'axios';
import User, { UserModel } from 'model/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    console.log("This API call only accepts POST methods");
    return res.status(405).json({ error: "This API call only accepts POST methods" });
  }
  
  const { auth, orderId, symbol, action, size } = req.body;
  
  const missing = [{auth}, {orderId}, {symbol}, {action}, {size}].filter((x: any) => !x[Object.keys(x)[0]]);
  if(missing.length > 0){
    console.log("Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", "));
    return res.status(500).json({ error: "Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", ")});
  }
  
  await dbConnect();
  const sanitize = require('mongo-sanitize');
  const user: UserModel | null = auth ? await User.findOne({ auth: sanitize(auth) }) : null;
  if (!user) {
    console.log("User authentication not found");
    return res.status(401).json({ error: "User authentication not found" })
  }

  try{
    const session = await axios.post(process.env.CAPITAL_URI + "/api/v1/session", { identifier: user.email, password: user.capital_api_password }, { headers: { "X-CAP-API-KEY": user.capital_api } });
    const cst = session.headers["cst"];
    const token = session.headers["x-security-token"];

    const config = {
      headers: {
        "X-SECURITY-TOKEN": token,
        "CST": cst
      }
    }

    const data = {
      newClientOrderId: orderId,
      epic: symbol,
      direction: action.toUpperCase(),
      size: size,
    }

    const order_response = await axios.post(process.env.CAPITAL_URI + "/api/v1/positions", data, config);
    return res.status(200).json(order_response.data["dealReference"]);
  }
  catch(error: any) {
    console.log(error);
    return res.status(error.response.status).json({ error: error.response.data.errorCode});
  }
}
  