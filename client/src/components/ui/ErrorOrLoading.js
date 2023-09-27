import React, { useContext } from "react";

import DarkModeContext from "../../store/color-context";

import classes from "./ErrorOrLoading.module.css";

// Font-Awesome-Animation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning, faSync } from "@fortawesome/free-solid-svg-icons";

const Error = (props) => {
  const { isErrorPage = true } = props;

  const darkCtx = useContext(DarkModeContext);
  // const errorIconClasses = darkCtx.isDarkMode
  //   ? `${classes.loader} ${classes["loader-dark-mode"]} ${classes["loader-dark-mode"]}::before ${classes["loader-dark-mode"]}::after`
  //   : `${classes.loader} ${classes["loader-light-mode"]} ${classes["loader-light-mode"]}::before ${classes["loader-light-mode"]}::afte`;

  const fontColor = darkCtx.isDarkMode ? classes["color-dark"] : classes["color-dark"]

  const pageTitle = isErrorPage ? "404" : "Loading";
  const pageMessage = isErrorPage ? "Not Found" : "Wait";

  const pageIcon = isErrorPage ? (
    // Font-Awesome-Animation
    // For installing font awesome refer to this link
    // https://fontawesome.com/v5/docs/web/use-with/react
    // Other animations can be beat, spin, pulse, fade, bounce, flip, shake
    // Can take the combination of animation keys. For animations
    // https://fontawesome.com/docs/web/style/animate
    <FontAwesomeIcon icon={faWarning} size="5x" fade color={fontColor} />
  ) : (
    <FontAwesomeIcon icon={faSync} size="5x" spin color={fontColor} />
  );

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 classes={fontColor}>{pageTitle}</h1>
        <h2 classes={fontColor}>{pageMessage}</h2>
        {pageIcon}
      </div>
    </section>
  );
};

export default Error;
