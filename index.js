// Express app setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const amqp = require("amqplib/callback_api");
const textController = require("./controllers/submit-text");

const app = express();

// amqp.connect("amqp://localhost", (connectionErr, connection) => {
//   if (connectionErr) {
//     console.log("Unable to connect to rabbit mq :: ", err);
//     return;
//   }
//   connection.createChannel((channelErr, channel) => {
//     if (channelErr) {
//       console.log("Unable to create connection channel :: ", err);
//       return;
//     }
//     const queue = "hello";
//     const msg = "Hello World";
//     channel.assertQueue(queue, {
//       durable: false,
//     });

//     setTimeout(() => {
//       channel.sendToQueue(queue, Buffer.from(msg));
//       console.log("Successfully sent message :: ", msg);
//     }, 1000);

//     // Adding consumption logic here
//     setTimeout(() => {
//       console.log("Waiting for messages on queue :: ", queue);
//       channel.consume(
//         queue,
//         (msg) => {
//           console.log("Received message :: ", msg.content.toString());
//         },
//         {
//           noAck: true,
//         }
//       );
//     }, 5000);
//   });
//   setTimeout(() => {
//     connection.close();
//     process.exit(0);
//   }, 50000);
// });

app.use(bodyParser.json());
app.use(cors());

app.use(express.static("www"));
app.post("/api/submit-text", textController.handleTextSubmission);

app.listen(3000, (err) => {
  if (err) {
    console.log("Error while starting server :: ", err);
  } else {
    console.log("Listening on port 3000");
  }
});
