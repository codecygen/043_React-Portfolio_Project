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

blacklistSchema.statics.getBlacklist = async function () {
  try {
    const blacklist = await this.find();
    return blacklist;
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoose.model("BlacklistModel", blacklistSchema);
