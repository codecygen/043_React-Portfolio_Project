const express = require("express");
const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" })); // To parse the incoming requests with JSON payloads

// This section enables cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const dataRoutes = require("./api");
const scheduledEmail = require("./utils/scheduledEmail");

const port = process.env.PORT || 4000;

app.use(dataRoutes);

// scheduledEmail();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
