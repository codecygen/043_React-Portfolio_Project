const CronJob = require("cron").CronJob;
// const connectDatabase = require("../models/database/connectDatabase");
const sendMail = require("./sendMail");

const visitorsModel = require("../models/visitorsModel");

const crobJobEmail = () => {
  const job = new CronJob(
    // every midnight "0 0 * * *"
    // every 10 seconds "*/10 * * * * *"
    // every 5 minutes "*/5 * * * *"
    // every day 20pm "0 20 * * *"
    "0 20 * * *",
    async () => {
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

      const allVisitors = await visitorsModel.getTodaysVisitors(
        todayStartTimeStamp,
        todayEndTimeStamp
      );

      const emailTitle = `Visitor to ${process.env.PORTFOLIO_WEBSITE} in ${year}-${paddedMonth}-${paddedDay}`;

      if (!allVisitors || allVisitors.length === 0) {
        const emailBody = `
          <html>
            <head>
              <title>Visitors Today</title>
            </head>
            <body>
              <h2>Details:</h2>
              <h3>No one visited your website in ${year}-${paddedMonth}-${paddedDay}!</h3>
            </body>
          </html>
        `;
        try {
          const emailResponse = await sendMail(emailTitle, emailBody);

          if (!emailResponse.response) {
            console.error("Email is not received by the recipient!");
          }
        } catch (e) {
          console.error(e.message || "Problem sending daily email!");
        }

        return;
      }

      const visitorCount = allVisitors.length;

      // If an IP address visited more than 4 times,
      // it will only create times as
      // [2023-10-05T17:55:06.240Z, ......., ......., 2023-10-06T14:43:29.206Z]
      const visitorList = allVisitors.map((visitor) => {
        const summarizedVisitingTimes = visitor.visitingDates.map(
          (date, index) => {
            if (visitor.visitInstance <= 8) {
              return `${index + 1}) ${new Date(date)}`;
            } else if (index < 1 || index > visitor.visitInstance - 6) {
              return `${index + 1}) ${new Date(date)}`;
            } else if (index === 1 || index === 2) {
              return "........";
            } else {
              return null;
            }
          }
        );

        filteredVisitTimes = summarizedVisitingTimes.filter(element => {
          return element !== null;
        })

        return `
        <li>
          <p><strong style="color: blue;">IP:</strong> ${visitor.IP}</p>
          <p><strong style="color: blue;">Times Visited:</strong> ${
            visitor.visitInstance
          }</p>
          <ul>
            ${filteredVisitTimes
              .map((time) => `<li>${time}</li>`)
              .join("")}
          </ul>
          <p><strong style="color: blue;">Country:</strong> ${
            visitor.visitorData.country
          }</p>
          <p><strong style="color: blue;">City:</strong> ${
            visitor.visitorData.city
          }</p>
          <p><strong style="color: blue;">Latitude:</strong> ${
            visitor.visitorData.lat
          }</p>
          <p><strong style="color: blue;">Longitude:</strong> ${
            visitor.visitorData.lon
          }</p>
          <p><strong style="color: blue;">Zip Code:</strong> ${
            visitor.visitorData.zip
          }</p>
          <p><strong style="color: blue;">ISP:</strong> ${
            visitor.visitorData.isp
          }</p>
        </li><br>`;
      });

      // This can be added to email body to see json data in formatted form
      // <pre>${JSON.stringify(allVisitors, null, "\t")}</pre>
      const emailBody = `
      <html>
        <head>
          <title>Visitors Today</title>
        </head>
        <body>
          <h2>Details:</h2>
          <h3><strong style="color: red;">${visitorCount}</strong> ${
        visitorCount === 1 ? "person" : "people"
      } visited your website in ${year}-${paddedMonth}-${paddedDay}!</h3>
          <ol>${visitorList.join("")}</ol>
        </body>
      </html>
      `;

      try {
        const emailResponse = await sendMail(emailTitle, emailBody);

        if (!emailResponse.response) {
          console.error("Email is not received by the recipient!");
        }
      } catch (e) {
        console.error(e.message || "Problem sending daily email!");
      }
    },
    null,
    true,
    "UTC"
  );

  return job;
};

const dailyVisitorsEmail = () => {
  try {
    crobJobEmail();
  } catch (err) {
    console.error(err);
  }
};

module.exports = dailyVisitorsEmail;
