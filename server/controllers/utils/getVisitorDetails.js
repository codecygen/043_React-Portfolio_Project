const axios = require("axios");

const getVisitorDetails = async (ip) => {
  let moreInfoRes;
  let moreInfo;

  try {
    moreInfoRes = await axios.get(`http://ip-api.com/json/${ip}`);
    moreInfo = await moreInfoRes.data;
  } catch (e) {
    console.error(e.message || "Problem connecting to API to get more info");
  }

  if (moreInfo.status !== "success") {
    moreInfo = "Cannot connect API to get more info!";
  }

  return moreInfo;
};

module.exports = getVisitorDetails;
