const connectDatabase = require("./utils/connectDatabase");

class BlacklistModel {
  constructor(ip, visitorData) {
    this.IP = ip;
    this.visitorData = visitorData;
  }
}

module.exports = BlacklistModel;