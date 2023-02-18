const express = require('express');
const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'})) // To parse the incoming requests with JSON payloads

const dataRoutes = require('./routes/dataRoutes');


const port = process.env.PORT || 4000;

app.use(dataRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});