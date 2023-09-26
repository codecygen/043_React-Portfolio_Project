import React, { useContext } from "react";

import DarkModeContext from "../../store/color-context";

import classes from "./Error.module.css";

// Font-Awesome-Animation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  const darkCtx = useContext(DarkModeContext);
  // const errorIconClasses = darkCtx.isDarkMode
  //   ? `${classes.loader} ${classes["loader-dark-mode"]} ${classes["loader-dark-mode"]}::before ${classes["loader-dark-mode"]}::after`
  //   : `${classes.loader} ${classes["loader-light-mode"]} ${classes["loader-light-mode"]}::before ${classes["loader-light-mode"]}::afte`;

  return (
    <section className={classes.error}>
      <div className={classes.container}>
        <h1>404</h1>
        <h2>Contact Admin</h2>
        {/* Font-Awesome-Animation */}
        {/* For installing font awesome refer to this link */}
        {/* https://fontawesome.com/v5/docs/web/use-with/react */}
        {/* Other animations can be beat, spin, pulse, fade, bounce, flip, shake */}
        {/* Can take the combination of animation keys. For animations */}
        {/* https://fontawesome.com/docs/web/style/animate */}
        <FontAwesomeIcon
          icon={faGears}
          size="5x"
          fade
          color="rgba(130, 45, 28, 1)"
        />
      </div>
    </section>
  );
};

export default Error;
