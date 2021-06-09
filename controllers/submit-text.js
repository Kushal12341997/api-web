const { default: axios } = require("axios");

const handleTextSubmission = (req, res, next) => {
  const requestBody = req.body;
  console.log("Text data :: ", requestBody);
  axios({
    method: "POST",
    url: "http://127.0.0.1:3002/model/summarize",
    data: requestBody,
  })
    .then((response) => {
      console.log("Response :: ", response);
      res.status(200).send("");
    })
    .catch((err) => {
      console.log("Error :: ", err);
      res.status(502).send("");
    });
};

module.exports = {
  handleTextSubmission: handleTextSubmission,
};
