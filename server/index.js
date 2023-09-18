const express = require("express");
const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" })); // To parse the incoming requests with JSON payloads

// Enabled using .env file in the project
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;

// Make sure the proper origin is given for CORS so it works
// both in production and development environment.
let allowedFrontEndOrigin = process.env.PORT ? process.env.PORTFOLIO_WEBSITE : "*";

// This section enables cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedFrontEndOrigin);

  // Allow common headers
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Allow common HTTP methods
  // res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
});

const dataRoutes = require("./api");
const scheduledEmail = require("./utils/scheduledEmail");

app.use(dataRoutes);

try {
  scheduledEmail();
} catch (e) {
  console.log(e.message);
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
