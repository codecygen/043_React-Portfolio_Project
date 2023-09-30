const connectDatabase = require("./utils/connectDatabase");

class VisitorModel {
  constructor(ip, visitingDates, visitorData) {
    this.IP = ip;
    this.visitingDates = visitingDates;
    this.visitorData = visitorData;
  }
}

module.exports = VisitorModel;
