import React, { useContext } from "react";

import DarkModeContext from "../../store/color-context";

import classes from "./Error.module.css";

const Error = () => {
  const darkCtx = useContext(DarkModeContext);
  const loadingBarClasses = darkCtx.isDarkMode
    ? `${classes.loader} ${classes["loader-dark-mode"]} ${classes["loader-dark-mode"]}::before ${classes["loader-dark-mode"]}::after`
    : `${classes.loader} ${classes["loader-light-mode"]} ${classes["loader-light-mode"]}::before ${classes["loader-light-mode"]}::afte`;

  return (
    <section className={classes.loading}>
      <div className={classes.container}>
        <h1>Error</h1>
        <div className={loadingBarClasses}>Error</div>
      </div>
    </section>
  );
};

export default Error;
