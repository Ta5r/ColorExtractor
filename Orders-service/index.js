const express = require("express")
const app = express()

const amqp = require('amqplib');
const amqpUrl = process.env.AMQP_URL || 'amqp://localhost:5672';

app.get('/', async (req, res) => {
    const connection = await amqp.connect(amqpUrl);
    const channel = await connection.createChannel();
    channel.assertQueue("order.shipped", {durable: true});
    channel.sendToQueue("order.shipped", Buffer.from(JSON.stringify({
        customerId: 5,
        orderId: 7,
        number: "199 222 3333"
    })));
    res.send("ORDERS API");
  })

app.listen(8000, () => {
    console.log("ORDERS API listening on port 8000")
})