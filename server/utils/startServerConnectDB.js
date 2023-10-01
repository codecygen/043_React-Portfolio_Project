const express = require("express");
const app = express();
const mongoose = require("mongoose");

const startServerConnectDB = () => {
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
};

module.exports = startServerConnectDB;
