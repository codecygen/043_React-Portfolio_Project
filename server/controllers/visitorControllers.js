const sendMail = require("../utils/sendMail");
const connectDatabase = require("../models/database/connectDatabase");
const updateVisitorInfo = require("../utils/updateVisitorInfo");
const getMoreInfo = require("../utils/getMoreInfo");

const saveVisitorInfo = async (req, res, next) => {
  let visitorData = req.body;

  if (!visitorData) {
    res.status(422).json({ message: "Could not receive message!" });
  }

  // Connect to "bans" collection
  const {
    client,
    dbCollection: blackListCollection,
    db,
  } = await connectDatabase("blacklist");

  // await blackListCollection.insertOne({
  //   ip: "78.184.125.228"
  // });

  // await db.createCollection("bans");
  const cursor = await blackListCollection.find();
  const blackList = await cursor.toArray();

  bannedIPList = blackList.map((list) => list.ip);

  const isAllowed =
    bannedIPList.findIndex((ip) => ip === visitorData.IP) === -1 ? true : false;

  const visitTimeStamp = Date.now();

  visitorData = {
    ...visitorData,
    visitingDates: [visitTimeStamp],
    visitInstance: 1,
  };

  // Connect to "visitors" collection
  const { _: ignored, dbCollection: visitorCollection } = await connectDatabase(
    "visitors"
  );

  // Checkout if the client connected to website before, if yes,
  // put the latest timestamp of the visit, if no,
  // create a new entry for the first time visitor
  const result = await updateVisitorInfo(visitorCollection, visitorData);
  client.close();

  res
    .status(201)
    .json({ message: "Successfully sent visitor data!", isAllowed });
};

const sendVisitorEmail = async (req, res, next) => {
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

  try {
    const emailResponse = await sendMail(emailTitle, emailBody);

    if (!emailResponse.response) {
      res.status(422).json({ message: "Email is failed to be sent!" });
    }
  } catch (e) {
    res.status(422).json({ message: e.message });
    return;
  }

  res.status(201).json({ message: "Successfully sent email data!" });
};

module.exports = {
  saveVisitorInfo,
  sendVisitorEmail,
};
