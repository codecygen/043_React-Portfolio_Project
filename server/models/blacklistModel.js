const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema(
  {
    blockedIP: {
      type: String,
      required: true,
    },
  },
  {collection: "blacklist"}
);

module.exports = mongoose.model("BlacklistModel", blacklistSchema);
