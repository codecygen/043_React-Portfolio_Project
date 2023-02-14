import { useContext, useEffect, useState } from "react";
import DarkModeContext from "../../store/color-context";
import useAssessHeight from "../../hooks/use-assessHeight";

import classes from "./ContactCard.module.css";
import classes2 from "./EmailSentResult.module.css";

const EmailSentSuccess = (props) => {
  const finalHeight = useAssessHeight("warning-message");
  const darkCtx = useContext(DarkModeContext);

  const [currentHeight, setCurrentHeight] = useState();

  const contactColor = darkCtx.isDarkMode
    ? "contact-color-dark"
    : "contact-color-light";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeight(finalHeight);
    }, 20);

    setCurrentHeight(props.elementHeight);

    return () => {
      clearInterval(interval);
    };
  }, [props.elementHeight, finalHeight]);

  return (
    <section className={classes["form-card"]} id="warning-message">
      <div className={contactColor}>
        <h3
          className={classes2.warning}
          style={{
            height: currentHeight,
            lineHeight: currentHeight,
          }}
        >
          {props.isSent ? "I received your email!" : "Failed to send email!"}
        </h3>
      </div>
    </section>
  );
};

export default EmailSentSuccess;
