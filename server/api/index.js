const express = require("express");
const sendMail = require("../utils/sendMail");
const router = express.Router();

const connectDatabase = require("../utils/connectDatabase");
const updateVisitorInfo = require("../utils/updateVisitorInfo");
const getMoreInfo = require("../utils/getMoreInfo");

const dotenv = require("dotenv");
dotenv.config();

router.post("/visitor", async (req, res) => {
  let visitorData = req.body;

  if (!visitorData) {
    res.status(422).json({ message: "Could not receive message!" });
  }

  const visitTimeStamp = Date.now();

  visitorData = {
    ...visitorData,
    visitingDates: [visitTimeStamp],
    visitInstance: 1,
  };

  // Connect to "visitors" collection
  const { client, dbCollection: visitorCollection } = await connectDatabase(
    "visitors"
  );

  // Checkout if the client connected to website before, if yes,
  // put the latest timestamp of the visit, if no,
  // create a new entry for the first time visitor
  const result = await updateVisitorInfo(visitorCollection, visitorData);
  client.close();

  res.status(201).json({ message: "Successfully sent visitor data!" });
});

router.post("/email", async (req, res) => {
  const postedData = req.body;

  if (!postedData) {
    res.status(422).json({ message: "Could not receive email data!" });
  }

  const { IP, Name, Subject, Message } = postedData.emailData;

  const additionalInfo = await getMoreInfo(IP);

  const emailTitle = `Contact Message from ${process.env.PORTFOLIO_WEBSITE}`;
  const emailBody = `
    <p><strong>IP:</strong> ${IP}</p>
    <p><strong>Country:</strong> ${additionalInfo.country}</p>
    <p><strong>City:</strong> ${additionalInfo.city}</p>
    <p><strong>Name:</strong> ${Name}</p>
    <p><strong>Subject:</strong> ${Subject}</p>
    <p><strong>Message:</strong> ${Message}</p>
  `;

  await sendMail(emailTitle, emailBody);
  res.status(201).json({ message: "Successfully sent email data!" });
});

module.exports = router;
