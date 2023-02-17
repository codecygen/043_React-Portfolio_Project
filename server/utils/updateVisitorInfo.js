const updateVisitorInfo = async (visitorCollection, visitorData) => {
  let foundVisitor;

  try {
    foundVisitor = await visitorCollection.findOne({
      IP: visitorData.IP,
    });
  } catch (e) {
    console.error(e.message || "Problem finding visitor!");
  }

  if (foundVisitor) {
    const lastVisitTime =
      foundVisitor.visitingTimes[foundVisitor.visitingTimes.length - 1];

    const currentVisitTime = visitorData.visitingTimes[0];

    // Update database only after 3 minutes of the last visit
    if (currentVisitTime - lastVisitTime <= 180000) {
      return;
    }

    try {
      const result = await visitorCollection.updateOne(
        { IP: visitorData.IP },
        {
          $set: {
            visitingTimes: [
              ...foundVisitor.visitingTimes,
              visitorData.visitingTimes[0],
            ],
          },
        }
      );
    } catch (e) {
      console.error(e.message || "Problem in updating visitors collection!");
    }

    return;
  }

  try {
    // Inser new entry if the user has never visited my website
    const result = await visitorCollection.insertOne(visitorData);
  } catch (e) {
    console.error(e.message || "Problem inserting new visitor entry!");
  }
};

module.exports = updateVisitorInfo;
