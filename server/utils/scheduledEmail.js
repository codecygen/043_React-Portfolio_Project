const CronJob = require("cron").CronJob;
const connectDatabase = require("../utils/connectDatabase");

const scheduledEmail = () => {
  const job = new CronJob(
    "*/10 * * * * *",
    async () => {
      // const { client, dbCollection: visitorCollection } = await connectDatabase(
      //   "visitors"
      // );

      console.log("You will see this message every 10 seconds");
    },
    null,
    true,
    "America/New_York"
  );

  return job;
};

module.exports = scheduledEmail;

// every midnight "0 0 0 * * *"
// every 10 seconds "*/10 * * * * *"
