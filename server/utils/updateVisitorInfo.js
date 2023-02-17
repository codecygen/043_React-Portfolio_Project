const updateVisitorInfo = async (visitorCollection, visitorData) => {
  const foundVisitor = await visitorCollection.findOne({ IP: visitorData.IP });

  if (foundVisitor) {
    console.log(foundVisitor);
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
