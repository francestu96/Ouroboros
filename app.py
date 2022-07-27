import json
from flask import Flask, request, render_template
from binance.client import Client
from binance.enums import *

try:
  config = json.load(open('config.json'))
except Exception as e:
  print(e)

app = Flask(__name__)

def manage_order(exchange, order_id, symbol, direction, quantity):
    try:
        print(f"Sending order {ORDER_TYPE_MARKET} - {direction} {quantity} {symbol}")
        if exchange['name'] == "binance":
            binance = Client(exchange['api_key'], exchange['api_secret'], testnet=True)            
            order = binance.futures_create_order(newClientOrderId=order_id, symbol=symbol, side=direction, type=ORDER_TYPE_MARKET, quantity=quantity)
        else:
            raise Exception("exchange not supported")

        return order        
    except Exception as e:
        print("An exception occured: {}".format(e))
        return False

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/webhook', methods=['POST'])
def webhook():
    data = json.loads(request.data)
    
    user = [x for x in config['users'] if x['token'] == data['token']]
    if len(user) < 1:
        return { "code": "error", "message": "Invalid token" }
    user = user[0]

    exchange = [x for x in user['exchanges'] if x['name'] == data['exchange'].lower()]
    if len(exchange) < 1:
        return { "code": "error", "message": "Exchange not valid" }
    exchange = exchange[0]

    order_id = data['orderId']
    symbol = data['symbol']
    direction = data['action'].upper() 
    quantity = str(round(float(data['size']), 3))

    order_response = manage_order(exchange, order_id, symbol, direction, quantity)

    if order_response:
        return { "code": "success", "message": "Order executed" }
    else:
        print("Order failed")
        return { "code": "error", "message": "Order failed" }