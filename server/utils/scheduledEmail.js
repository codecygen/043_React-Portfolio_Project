const CronJob = require("cron").CronJob;

const scheduledEmail = async (ip) => {
  const job = new CronJob(
    "* * * * * *",
    function () {
      console.log("You will see this message every second");
    },
    null,
    true,
    "America/New_York"
  );

  return job;
};

module.exports = scheduledEmail;
