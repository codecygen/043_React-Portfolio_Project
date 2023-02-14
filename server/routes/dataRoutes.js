const express = require("express");
const router = express.Router();

// router.get('/test', (req, res) => {
//     res.json({
//         color: "red",
// 		value: "#f00"
//     });
// });

router.post("/test", (req, res) => {
  
  postedData = req.body;

  console.log(postedData);

  if (!postedData) {
    res.status(422).json({ message: "Could not receive message!" });
  }

  res.status(201).json({ message: "Successful!", data: postedData });
});

module.exports = router;
