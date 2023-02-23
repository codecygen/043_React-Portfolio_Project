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

  const emailTitle = `Email from ${process.env.PORTFOLIO_WEBSITE}`;
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

router.get("/today", async (req, res) => {
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
          $lt: todayEndTimeStamp,
        },
      },
    })
    .toArray();

  client.close();

  if (!allVisitors || allVisitors.length === 0) {
    res.json({ noVisitor: "None Returned" });
    return;
  }

  const visitorCount = allVisitors.length;

  const visitorList = allVisitors.map(
    (visitor) =>
      `<li>
        <p><strong style="color: blue;">IP:</strong> ${visitor.IP}</p>
        <p><strong style="color: blue;">Times Visited:</strong> ${
          visitor.visitInstance
        }</p>
        <ol>
          ${visitor.visitingDates
            .map((timeStamp) => `<li>${new Date(timeStamp)}</li>`)
            .join("")}
        </ol>
        <p><strong style="color: blue;">Country:</strong> ${visitor.country}</p>
        <p><strong style="color: blue;">City:</strong> ${visitor.city}</p>
        <p><strong style="color: blue;">Latitude:</strong> ${visitor.lat}</p>
        <p><strong style="color: blue;">Longitude:</strong> ${visitor.lon}</p>
        <p><strong style="color: blue;">Zip Code:</strong> ${visitor.zip}</p>
        <p><strong style="color: blue;">ISP:</strong> ${visitor.isp}</p>
      </li><br>`
  );

  // This can be added to email body to see json data in formatted form
  // <pre>${JSON.stringify(allVisitors, null, "\t")}</pre>
  const emailBody = `<html>
      <head>
        <title>Visitors Today</title>
      </head>
      <body>
        <h2>Details:</h2>
        <h3><strong style="color: red;">${visitorCount}</strong> people visited your website today!</h3>
        <ol>${visitorList.join("")}</ol>
      </body>
    </html>`;

  res.send(emailBody);

  const emailTitle = `Today's Visitors to ${process.env.PORTFOLIO_WEBSITE}`;

  await sendMail(emailTitle, emailBody);
});

module.exports = router;
