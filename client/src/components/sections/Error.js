import React, { useContext } from "react";

import DarkModeContext from "../../store/color-context";

import classes from "./Error.module.css";

const Error = () => {
  const darkCtx = useContext(DarkModeContext);
  // const errorIconClasses = darkCtx.isDarkMode
  //   ? `${classes.loader} ${classes["loader-dark-mode"]} ${classes["loader-dark-mode"]}::before ${classes["loader-dark-mode"]}::after`
  //   : `${classes.loader} ${classes["loader-light-mode"]} ${classes["loader-light-mode"]}::before ${classes["loader-light-mode"]}::afte`;

  return (
    <section className={classes.error}>
      <div className={classes.container}>
        <h1>500</h1>
        <p>Please Contact System Admin!</p>
        <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>
      </div>
    </section>
  );
};

export default Error;
