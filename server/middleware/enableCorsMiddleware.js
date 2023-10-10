const enableCorsMiddleWare = (req, res, next) => {
  // Make sure the proper origin is given for CORS so it works
  // both in production and development environment.
  let allowedFrontEndOrigin = process.env.PORT
    ? process.env.PORTFOLIO_WEBSITE
    : "*";

  res.header("Access-Control-Allow-Origin", allowedFrontEndOrigin);

  // Allow common headers
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );

  // Allow common HTTP methods
  // res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
};

module.exports = enableCorsMiddleWare;
