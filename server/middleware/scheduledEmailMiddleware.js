// const CronJob = require("cron").CronJob;

// const connectDatabase = require("../utils/connectDatabase");
const scheduledEmail = require("./utils/scheduledEmail");
// const sendMail = require("../utils/sendMail");

const scheduledEmailMiddleware = (req, res, next) => {
  try {
    scheduledEmail();
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = scheduledEmailMiddleware;
