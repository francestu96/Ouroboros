# Ouroboros

Connect your [TradingView](https://www.tradingview.com/) strategies to your favorite Exchange.\
\
Are you wondering how to apply your strategies to place **real-time orders** with PineScript?\
This project borns from a personal need and it's here to help you doing this without having any programming skills. Configuration take less then **5 minutes**!

Visit [https://https://ouroboros-francestu96.vercel.app/](https://https://ouroboros-francestu96.vercel.app/)

## Prerequisites

In order to be able to interact with **Ouroboros**, you first need to contact [J4ckSp4rr0w@protonmail.com](mailto:J4ckSp4rr0w@protonmail.com) to get the authorization!

## Set TradingView alerts
**Important: you need at least the TradingView PRO plan in order to make this works!**\
If you do not know how **alerts** work, I suggest you to look at this short [YouTube Video](https://www.youtube.com/watch?v=AgrftqSLE2U) in order to make you an idea of what they are and how to configure them.

## Configuration
Once you get how to manage **TradingView alerts**, all you have to do, is to set the following JSON encoded text in the **alert message** field:

```json
{
    "token": "<your_authorization_token>",
    "exchange": "{{exchange}}",
    "orderId":"{{strategy.order.id}}",
    "symbol": "{{ticker}}",
    "action": "{{strategy.order.action}}",
    "size": "{{strategy.order.contracts}}"
}
```
<ins>**That's all you have to do!**</ins>