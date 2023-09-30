const express = require("express");
const router = express.Router();

// const sendMail = require("../utils/sendMail");
// const connectDatabase = require("../models/utils/connectDatabase");
// const updateVisitorInfo = require("../utils/updateVisitorInfo");
// const getMoreInfo = require("../utils/getMoreInfo");

const visitorControllers = require("../controllers/visitorControllers");

router.post("/visitor", visitorControllers.saveVisitorInfo);
router.post("/email", visitorControllers.sendVisitorEmail);

module.exports = router;
