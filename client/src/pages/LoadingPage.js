import React from "react";

import ErrorOrLoading from "../components/ui/ErrorOrLoading";

const LoadingPage = (props) => {
  return (
    <div className={props.bodyColor}>
      <ErrorOrLoading isErrorPage={false} />
    </div>
  );
};

export default LoadingPage;
