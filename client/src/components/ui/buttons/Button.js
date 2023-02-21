import React, { useContext } from "react";
import classes from "./Button.module.css";

import DarkModeContext from "../../../store/color-context";

const Button = (props) => {
  const darkCtx = useContext(DarkModeContext);

  const buttonClasses = darkCtx.isDarkMode
    ? `${classes.card} button-color-dark`
    : `${classes.card} button-color-light`;

  if (props.scroll) {
    return (
      <button
        className={buttonClasses}
        style={{
          padding: props.padding && "10px",
          margin: props.margin && "10px",
        }}
        onClick={() => {
          document.getElementById("contact").scrollIntoView();
        }}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      className={buttonClasses}
      style={{
        padding: props.padding && "10px",
        margin: props.margin && "10px",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
