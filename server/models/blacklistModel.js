const connectDatabase = require("./utils/connectDatabase");

class BlacklistModel {
  constructor(blacklistIP) {
    this.blacklistIP = blacklistIP;
  }
}

module.exports = BlacklistModel;