const updateVisitorInfo = async (visitorCollection, visitorData) => {
  const foundVisitor = await visitorCollection.findOne({ IP: visitorData.IP });

  if (foundVisitor) {
    const lastVisitTime =
      foundVisitor.visitingTimes[foundVisitor.visitingTimes.length - 1];
    
    const currentVisitTime = visitorData.visitingTimes[0];

    // Update database only after 3 minutes of the last visit
    if (currentVisitTime - lastVisitTime <= 180000) {
      return;
    }

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

    return;
  }

  const result = await visitorCollection.insertOne(visitorData);
};

module.exports = updateVisitorInfo;
