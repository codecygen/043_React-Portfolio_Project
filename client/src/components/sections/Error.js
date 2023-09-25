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

        <section className={classes["gear-container"]}>
          <div className={classes.gears}>
            <div className={`${classes.gear} ${classes.one}`}>
              <div className={classes.bar}></div>
              <div className={classes.bar}></div>
              <div className={classes.bar}></div>
            </div>
            <div className={`${classes.gear} ${classes.two}`}>
              <div className={classes.bar}></div>
              <div className={classes.bar}></div>
              <div className={classes.bar}></div>
            </div>
            <div className={`${classes.gear} ${classes.three}`}>
              <div className={classes.bar}></div>
              <div className={classes.bar}></div>
              <div className={classes.bar}></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Error;
