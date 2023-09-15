import axios from 'axios';
import User, { UserModel } from 'model/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/dbConnect';

function getOrderType(action: string, orderId: string){
  if(action == "buy"){
    if(orderId.toLocaleLowerCase().includes("long")) return ["BUY", "(Go Long)"];
    else if(orderId.toLocaleLowerCase().includes("close") || orderId.toLocaleLowerCase().includes("exit")) return ["COVER", "(Exit Short)"];
    else return undefined
  }
  else if(action == "sell"){
    if(orderId.toLocaleLowerCase().includes("short")) return ["SHORT", "(Go Short)"];
    else if(orderId.toLocaleLowerCase().includes("close") || orderId.toLocaleLowerCase().includes("exit")) return ["SELL", "(Exit Long)"];
    else return undefined
  }
  else return undefined;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    console.log("This API call only accepts POST methods");
    return res.status(405).json({ error: "This API call only accepts POST methods" });
  }
  
  const { auth, orderId, symbol, action, price, datetime, discord, telegram, timezone } = req.body; 

  if(!discord && !telegram){
    console.log("No Discord nor Telegram channel enabled");
    return res.status(500).json({ error: "No Discord nor Telegram channel enabled"});
  }
  
  const missing = [{auth}, {orderId}, {symbol}, {action}, {price}, {datetime}].filter((x: any) => !x[Object.keys(x)[0]]);
  if(missing.length > 0){
    console.log("Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", "));
    return res.status(500).json({ error: "Missing mandatory fields: " + missing.map((x: any) => Object.keys(x)[0]).join(", ")});
  }
  
  await dbConnect();
  const sanitize = require('mongo-sanitize');
  const user: UserModel | null = auth ? await User.findOne({ auth: sanitize(auth) }) : null;
  
  if (!user) {
    console.log("User authentication not found");
    return res.status(401).json({ error: "User authentication not found" });
  }

  const datetimeObj = new Date(datetime);
  const date = datetime.substring(0, 10);
  try{
    var time = datetimeObj.toLocaleTimeString(undefined, {timeZone: timezone || "UTC", hour: "2-digit", minute: "2-digit", hourCycle: "h24"});
  }
  catch{
    console.log("Wrong timezone: " + timezone);
    return res.status(500).json({ error: "Wrong timezone: " + timezone });
  }

  const orderType = getOrderType(action, orderId);
  if(!orderType){
    console.log("'action'='" + action + "' and 'orderId'='" + orderId + "' mismatch. Cannot get if BUY, SELL, SHORT or COVER");
    return res.status(500).json({ error: "'action'='" + action + "' and 'orderId'='" + orderId + "' mismatch. Cannot get if BUY, SELL, SHORT or COVER"});
  }

  if(discord){
    const embeds = {
      title: "New " + orderType[0] + " signal!",
      description: orderType[0] + " " + orderType[1] + " " + symbol + " at " + price,
      footer: {
        text: time + " " + (timezone || "UTC") + " on " + date,
      },
      color: action == "buy" ? 5174599 : 16737945
    }
    
    const params = {
      username: "SKI Calls",
      content: "@everyone",
      avatar_url: "https://media.licdn.com/dms/image/C4E03AQErzfc9Fgox3w/profile-displayphoto-shrink_800_800/0/1650165235802?e=2147483647&v=beta&t=tCxcXNNHmRcDN5gQLRPK2VhQY4Lxp9u8CTR1jFhx83Q",
      embeds: [ embeds ]
    }
  
    try{
      if(user.discord_url){
        await axios.post(user.discord_url, JSON.stringify(params), {headers: {'Content-type': 'application/json'}});
      }
      else{
        console.log("User Discord URL not set");
        return res.status(500).json({error: "User Discord URL not set"});
      }
    }
    catch(error: any) {
      console.log(error.response.data.message);
      return res.status(error.response.status).json({ error: error.response.data.message });
    }
  }

  if(telegram){
    try{
      const data = { 
        text: "<b>New " + orderType[0] + " signal!</b>\n" + orderType[0] + " " + orderType[1] + " <b>" + symbol + "</b> at <b>" + price + "</b>\n\n" + time + " " + (timezone || "UTC") + " on " + date,
        parse_mode: "HTML" 
      };
      if(user.telegram_url){
        await axios.post(user.telegram_url, data, {headers: {'Content-type': 'application/json'}});
        return res.status(200).end();
      }
      else{
        console.log("User Telegram URL not set");
        return res.status(500).json({error: "User Telegram URL not set"});
      }
    }
    catch(error: any) {
      console.log(error.response.data.description);
      return res.status(error.response.status).json({ error: error.response.data.description });
    }
  }

  return res.status(200).end();
}
  