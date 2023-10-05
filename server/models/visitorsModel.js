const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    IP: {
      type: String,
      required: true,
    },
    visitingDates: [Number],
    visitInstance: Number,
    visitorData: [
      {
        visitInstance: Number,
        status: String,
        country: String,
        countryCode: String,
        region: String,
        regionName: String,
        city: String,
        zip: String,
        lat: Number,
        lon: Number,
        timezone: String,
        isp: String,
        org: String,
        as: String,
        query: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { collection: "visitors" }
);

module.exports = mongoose.model("VisitorModel", visitorSchema);
