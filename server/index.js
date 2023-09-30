const express = require("express");
const app = express();

// Enabled using .env file in the project
const dotenv = require("dotenv");
dotenv.config();

const enableCorsMiddleware = require("./middleware/enableCorsMiddleware");
const dailyVisitorsEmail = require("./utils/dailyVisitorsEmail");

const dataRoutes = require("./routes/visitorRoutes");

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" })); // To parse the incoming requests with JSON payloads

// This section enables cors
app.use(enableCorsMiddleware);

// Sends daily visitor counts as email
dailyVisitorsEmail();

app.use(dataRoutes);

const serverPort = process.env.PORT || 4000;

app.listen(serverPort, () => {
  console.log(`App is listening on port ${serverPort}`);
});
