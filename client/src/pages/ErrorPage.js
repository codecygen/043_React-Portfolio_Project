import React from "react";

import ErrorOrLoading from "../components/ui/ErrorOrLoading";

const ErrorPage = (props) => {
  return (
    <div className={props.bodyColor}>
      <ErrorOrLoading />
    </div>
  );
};

export default ErrorPage;