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

  await sendMail(postedData.emailData);
  res.status(201).json({ message: "Successfully sent email data!" });
});

router.get("/test", async (req, res) => {
  // Connect to "visitors" collection
  const { client, dbCollection: visitorCollection } = await connectDatabase(
    "visitors"
  );

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // +1 to get month instead of month index
  const day = today.getDate();
  // getHours(), getMinutes(), getSeconds()

  // These will add leading 0 to months and day if necessary
  // if the returned day is 2, it will make it 02
  // if the returned month is 6, it will make it 06
  const paddedMonth = month.toString().padStart(2, 0);
  const paddedDay = day.toString().padStart(2, 0);

  // Here T represents time, Z represents Zulu time which is UTC.
  const todayStartString = `${year}-${paddedMonth}-${paddedDay}T00:00:00.000Z`;
  const todayEndString = `${year}-${paddedMonth}-${paddedDay}T23:59:59.999Z`;

  const todayStartTimeStamp = new Date(todayStartString).getTime();
  const todayEndTimeStamp = new Date(todayEndString).getTime();

  const allVisitors = await visitorCollection
  .find({
    visitingDates: {
      $elemMatch: {
        $gt: todayStartTimeStamp,
        $lt: todayEndTimeStamp
      }
    }
  })
  .toArray();

  client.close();

  res.json(allVisitors);
});

module.exports = router;
