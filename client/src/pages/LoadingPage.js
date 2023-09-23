import React from "react";

import Loading from "../components/sections/Loading";

const LoadingPage = (props) => {
  return (
    <div className={props.bodyColor}>
      <Loading />
    </div>
  );
};

export default LoadingPage;
