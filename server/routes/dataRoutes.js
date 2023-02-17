const express = require("express");
const sendMail = require("../utils/sendMail");
const router = express.Router();

const connectDatabase = require("../utils/connectDatabase");
const updateVisitorInfo = require("../utils/updateVisitorInfo");

router.post("/visitor", async (req, res) => {
  let visitorData = req.body;

  if (!visitorData) {
    res.status(422).json({ message: "Could not receive message!" });
  }

  const visitTimeStamp = Date.now();
  visitorData = { ...visitorData, visitingTimes: [visitTimeStamp] };
  console.log(visitorData);

  const { client, dbCollection: visitorCollection } = await connectDatabase(
    "visitors"
  );

  const result = await updateVisitorInfo(visitorCollection, visitorData);
  client.close();

  res.status(201).json({ message: "Successfully sent visitor data!" });
});

router.post("/email", async (req, res) => {
  const postedData = req.body;

  if (!postedData) {
    res.status(422).json({ message: "Could not receive email data!" });
  }

  await sendMail(postedData.emailData);
  res.status(201).json({ message: "Successfully sent email data!" });
});

module.exports = router;
