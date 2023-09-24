import React from "react";

import Error from "../components/sections/Error";

const ErrorPage = (props) => {
  return (
    <div className={props.bodyColor}>
      <Error />
    </div>
  );
};

export default ErrorPage;