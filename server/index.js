const express = require('express');
const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'})) // To parse the incoming requests with JSON payloads

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const dataRoutes = require('./api');


const port = process.env.PORT || 4000;

app.use(dataRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});