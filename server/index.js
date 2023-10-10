const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const enableCorsMiddleware = require("./middleware/enableCorsMiddleware");
const dailyVisitorsEmail = require("./utils/dailyVisitorsEmail");
const visitorRoutes = require("./routes/visitorRoutes");

// Enabled using .env file in the project
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" })); // To parse the incoming requests with JSON payloads

// This section enables cors
app.use(enableCorsMiddleware);

// Sends daily visitor counts as email
dailyVisitorsEmail();

app.use(
  session({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(visitorRoutes);

// By default uses port 4000
// In production if VPS is the server
// You can define port with process.env.PORT
const serverPort = process.env.PORT || 4000;

mongoose
  .connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(serverPort, () => {
      console.log(`App is listening on port ${serverPort}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
