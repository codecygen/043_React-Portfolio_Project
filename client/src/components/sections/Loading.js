import React from "react";

import classes from "./Loading.module.css";

const Loading = () => {

  return (
    <section className={classes.loading} >
      <div class={classes.loader}>Loading...</div>
    </section>
  );
};

export default Loading;
