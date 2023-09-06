import axios from 'axios';
import User from 'model/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(500).json({ error: "This API call only accepts POST methods" });
  }
  
  const { auth, orderId, symbol, action, price, time } = req.body;    
  
  console.log(orderId)
  await dbConnect();
  const sanitize = require('mongo-sanitize');
  const user = auth ? await User.findOne({ auth: sanitize(auth) }) : undefined;
  if (!user) {
    return res.status(401).json({ error: "User authentication not found" });
  }

  var embeds = {
    title: orderId.includes("Close") || orderId.includes("exit") 
      ? "Close the position and " + action.toUpperCase() + " " + symbol + " at " + price 
      : action.toUpperCase() + " " + symbol + " at " + price,
    description: symbol + " price is " + price + " at " + time,
    color: action == "buy" ? 5174599 : 16737945
  }
  
  var params = {
    username: "SKI Calls",
    avatar_url: "https://cdn.discordapp.com/avatars/787361724763996170/76bd5fa6c9b6177296bcdede1eff5471.webp?size=80",
    embeds: [ embeds ]
  }

  try{
    await axios.post(user.apollox_key, JSON.stringify(params), {headers: {'Content-type': 'application/json'}});
    return res.status(200).end();
  }
  catch(error: any) {
    return res.status(error.response.status).json({ error: error.response.data.message });
  }
}
  