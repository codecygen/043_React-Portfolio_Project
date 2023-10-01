const express = require("express");
const app = express();

// Enabled using .env file in the project
const dotenv = require("dotenv");
dotenv.config();

const enableCorsMiddleware = require("./middleware/enableCorsMiddleware");
const dailyVisitorsEmail = require("./utils/dailyVisitorsEmail");
const startServerConnectDB = require("./utils/startServerConnectDB");

const dataRoutes = require("./routes/visitorRoutes");

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" })); // To parse the incoming requests with JSON payloads

// This section enables cors
app.use(enableCorsMiddleware);

app.use(dataRoutes);

// Sends daily visitor counts as email
dailyVisitorsEmail();

// By default uses port 4000
// In production if VPS is the server
// You can define port with process.env.PORT
startServerConnectDB();