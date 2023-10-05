const express = require("express");
const router = express.Router();

const visitorControllers = require("../controllers/visitorControllers");

router.post(
  "/visitor",
  visitorControllers.allowedVisitorHandler,
  visitorControllers.saveVisitorInfo
);

router.post("/email", visitorControllers.sendVisitorEmail);

module.exports = router;
