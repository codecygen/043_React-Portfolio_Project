const express = require("express");
const router = express.Router();

router.post("/visitor", (req, res) => {
  
  postedData = req.body;

  console.log(postedData);

  if (!postedData) {
    res.status(422).json({ message: "Could not receive message!" });
  }

  res.status(201).json({ message: "Successful!" });
});

module.exports = router;
