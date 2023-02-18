const getMoreInfo = require("./getMoreInfo");

const updateVisitorInfo = async (visitorCollection, visitorData) => {
  let foundVisitor;
  let additionalData;
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
      additionalData = await getMoreInfo(visitorData.IP);

      updatedVisitorData = {
        ...visitorData,
        ...additionalData,
      };

      const result = await visitorCollection.updateOne(
        { IP: updatedVisitorData.IP },
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
    additionalData = await getMoreInfo(visitorData.IP);

    updatedVisitorData = {
      ...visitorData,
      ...additionalData,
    };

    // Insert new entry if the user has never visited my website
    const result = await visitorCollection.insertOne(updatedVisitorData);
  } catch (e) {
    console.error(e.message || "Problem inserting new visitor entry!");
  }
};

module.exports = updateVisitorInfo;
