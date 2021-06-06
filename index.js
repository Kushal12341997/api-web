// Express app setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const textController = require("./controllers/submit-text");

const app = express();
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
