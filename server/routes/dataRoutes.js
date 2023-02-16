const express = require("express");
const sendMail = require("../utils/sendMail");
const router = express.Router();

router.post("/visitor", (req, res) => {
  postedData = req.body;

  if (!postedData) {
    res.status(422).json({ message: "Could not receive message!" });
  }

  res.status(201).json({ message: "Successfully sent visitor data!" });
});

router.post("/email", async (req, res) => {
  postedData = req.body;

  if (!postedData) {
    res.status(422).json({ message: "Could not receive email data!" });
  }

  await sendMail(postedData.emailData);
  res.status(201).json({ message: "Successfully sent email data!" });
});

module.exports = router;
