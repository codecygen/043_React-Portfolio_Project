const connectDatabase = require("./database/connectDatabase");

class BlacklistModel {
  constructor(blacklistIP) {
    this.blacklistIP = blacklistIP;
  }
}

module.exports = BlacklistModel;