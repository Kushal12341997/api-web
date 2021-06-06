const handleTextSubmission = (req, res, next) => {
  console.log("Text data :: ", req.body);
  res.status(200).send("");
};

module.exports = {
  handleTextSubmission: handleTextSubmission,
};
