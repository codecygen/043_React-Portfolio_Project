const express = require("express");
const app = express();

// Enabled using .env file in the project
const dotenv = require("dotenv");
dotenv.config();

const enableCorsMiddleware = require("./middleware/enableCorsMiddleware");
const scheduledEmailMiddleware = require("./middleware/scheduledEmailMiddleware");

const dataRoutes = require("./api");
const scheduledEmail = require("./middleware/utils/scheduledEmail");

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" })); // To parse the incoming requests with JSON payloads

// This section enables cors
app.use(enableCorsMiddleware);

// This enables scheduled email, a daily report email to database
// about daily visitors
app.use(scheduledEmailMiddleware);

app.use(dataRoutes);

try {
  scheduledEmail();
} catch (e) {
  console.log(e.message);
}

const serverPort = process.env.PORT || 4000;

app.listen(serverPort, () => {
  console.log(`App is listening on port ${serverPort}`);
});
