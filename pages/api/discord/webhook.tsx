import axios from 'axios';
import User, { UserModel } from 'model/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/dbConnect';

function getOrderType(action: string, orderId: string){
  if(action == "buy"){
    if(orderId.toLocaleLowerCase() == "long") return ["BUY", "(Go Long)"];
    else if(orderId.toLocaleLowerCase().includes("close") || orderId.toLocaleLowerCase().includes("exit")) return ["COVER", "(Exit Short)"];
    else return undefined
  }
  else if(action == "sell"){
    if(orderId.toLocaleLowerCase() == "short") return ["SHORT", "(Go Short)"];
    else if(orderId.toLocaleLowerCase().includes("close") || orderId.toLocaleLowerCase().includes("exit")) return ["SELL", "(Exit Long)"];
    else return undefined
  }
  else return undefined;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "This API call only accepts POST methods" });
  }
  
  const { auth, orderId, symbol, action, price, time } = req.body; 
  
  const missing = [{auth}, {orderId}, {symbol}, {action}, {price}, {time}].filter((x: any) => !x[Object.keys(x)[0]]);
  if(missing.length > 0){
    return res.status(500).json({ error: "Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", ")});
  }
  
  await dbConnect();
  const sanitize = require('mongo-sanitize');
  const user: UserModel | null = auth ? await User.findOne({ auth: sanitize(auth) }) : null;
  if (!user) {
    return res.status(401).json({ error: "User authentication not found" });
  }

  const date = new Date(time);
  const orderType = getOrderType(action, orderId);
  if(!orderType){
    return res.status(500).json({ error: "'action'='" + action + "' and 'orderId'='" + orderId + "' mismatch. Cannot get if BUY, SELL, SHORT or COVER"});
  }

  const embeds = {
    title: "New " + orderType[0] + " signal!",
    description: orderType[0] + " " + orderType[1] + " " + symbol + " at " + price + " @everyone",
    footer: {
      text: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " UTC on " + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
    },
    color: action == "buy" ? 5174599 : 16737945
  }
  
  const params = {
    username: "SKI Calls",  
    avatar_url: "https://media.licdn.com/dms/image/C4E03AQErzfc9Fgox3w/profile-displayphoto-shrink_800_800/0/1650165235802?e=2147483647&v=beta&t=tCxcXNNHmRcDN5gQLRPK2VhQY4Lxp9u8CTR1jFhx83Q",
    embeds: [ embeds ]
  }

  try{
    if(user.discord_url){
      await axios.post(user.discord_url, JSON.stringify(params), {headers: {'Content-type': 'application/json'}});
      return res.status(200).end();
    }
    else{
      return res.status(500).json({error: "User discord URL not set"});
    }
  }
  catch(error: any) {
    return res.status(error.response.status).json({ error: error.response.data.message });
  }
}
  