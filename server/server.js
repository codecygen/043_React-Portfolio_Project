const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');


const port = 4000 || process.env.PORT;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(dataRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});