const mongoose = require("mongoose");
const getVisitorDetails = require("../controllers/utils/getVisitorDetails");

const visitorSchema = new mongoose.Schema(
  {
    IP: {
      type: String,
      required: true,
    },
    visitingDates: [Number],
    visitInstance: Number,
    visitorData: {
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
  },
  { collection: "visitors" }
);

visitorSchema.statics.saveVisitor = async function (visitorData) {
  let foundVisitor;
  let visitorDetails;
  let updatedVisitorData;

  try {
    foundVisitor = await this.findOne({
      IP: visitorData.IP,
    });
  } catch (e) {
    console.error(e.message || "Problem finding visitor!");
  }

  if (foundVisitor) {
    const lastVisitTime =
      foundVisitor.visitingDates[foundVisitor.visitingDates.length - 1];

    const currentVisitTime = visitorData.visitingDates[0];

    // Update database only after 3 minutes of the last visit
    if (currentVisitTime - lastVisitTime <= 180000) {
      return;
    }

    try {
      const result = await this.updateOne(
        { IP: visitorData.IP },
        {
          $set: {
            visitingDates: [
              ...foundVisitor.visitingDates,
              visitorData.visitingDates[0],
            ],

            visitInstance: foundVisitor.visitingDates.length + 1,
          },
        }
      );
    } catch (e) {
      console.error(e.message || "Problem in updating visitors collection!");
    }

    return;
  }

  try {
    visitorDetails = await getVisitorDetails(visitorData.IP);

    updatedVisitorData = {
      ...visitorData,
      visitorData: { ...visitorDetails },
    };

    await this.create(updatedVisitorData);
  } catch (e) {
    console.error(e.message || "Problem inserting new visitor entry!");
  }
};

visitorSchema.statics.getTodaysVisitors = async function (
  todayStartTimeStamp,
  todayEndTimeStamp
) {
  try {
    const todaysVisitors = await this.find({
      visitingDates: {
        $elemMatch: {
          $gt: todayStartTimeStamp,
          $lt: todayEndTimeStamp,
        },
      },
    });

    return todaysVisitors;
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoose.model("VisitorModel", visitorSchema);
