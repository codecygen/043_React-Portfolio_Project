const connectDatabase = require("./utils/connectDatabase");

class VisitorModel {
  constructor(ip, visitorData) {
    this.IP = ip;
    this.visitorData = visitorData;
  }
}

module.exports = VisitorModel;
