const getVisitorDetails = require("./getVisitorDetails");

const saveVisitor = async (visitorData) => {
  let foundVisitor;
  let visitorDetails;
  let updatedVisitorData;

  try {
    foundVisitor = await visitorCollection.findOne({
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
      const result = await visitorCollection.updateOne(
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
      ...visitorDetails,
    };

    // Insert new entry if the user has never visited my website
    const result = await visitorCollection.insertOne(updatedVisitorData);
  } catch (e) {
    console.error(e.message || "Problem inserting new visitor entry!");
  }
};

module.exports = saveVisitor;
