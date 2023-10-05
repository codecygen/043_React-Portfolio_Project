const visitorsModel = require("../models/visitorsModel");
const blacklistModel = require("../models/blacklistModel");

const sendMail = require("../utils/sendMail");

const allowedVisitorHandler = async (req, res, next) => {
  let visitorData = req.body;

  if (!visitorData) {
    res.status(422).json({ message: "Could not receive message!" });
  }

  const blackList = await blacklistModel.getBlacklist();

  bannedIPList = blackList.map((list) => list.blockedIP);

  const isAllowed =
    bannedIPList.findIndex((ip) => ip === visitorData.IP) === -1 ? true : false;

  res.status(201).json({
    message: "Successfully sent visitor data!",
    isAllowed,
  });

  next();
};

const saveVisitorInfo = async (req, res, next) => {
  const visitorIP = req.body;

  const visitTimeStamp = Date.now();

  const visitorData = {
    ...visitorIP,
    visitingDates: [visitTimeStamp],
    visitInstance: 1,
  };

  await visitorsModel.saveVisitor(visitorData);

  next();
};

const sendVisitorEmail = async (req, res, next) => {
  // const postedData = req.body;
  // if (!postedData) {
  //   res.status(422).json({ message: "Could not receive email data!" });
  // }
  // const { IP, Name, Subject, Message } = postedData.emailData;
  // const additionalInfo = await getMoreInfo(IP);
  // const emailTitle = `Contact Message from ${process.env.PORTFOLIO_WEBSITE}`;
  // const emailBody = `
  //     <p><strong>IP:</strong> ${IP}</p>
  //     <p><strong>Country:</strong> ${additionalInfo.country}</p>
  //     <p><strong>City:</strong> ${additionalInfo.city}</p>
  //     <p><strong>Name:</strong> ${Name}</p>
  //     <p><strong>Subject:</strong> ${Subject}</p>
  //     <p><strong>Message:</strong> ${Message}</p>
  //   `;
  // try {
  //   const emailResponse = await sendMail(emailTitle, emailBody);
  //   if (!emailResponse.response) {
  //     res.status(422).json({ message: "Email is failed to be sent!" });
  //   }
  // } catch (e) {
  //   res.status(422).json({ message: e.message });
  //   return;
  // }
  // res.status(201).json({ message: "Successfully sent email data!" });
};

module.exports = {
  allowedVisitorHandler,
  saveVisitorInfo,
  sendVisitorEmail,
};
