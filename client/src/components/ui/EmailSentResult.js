import { useContext } from "react";
import DarkModeContext from "../../store/color-context";

import classes from "./ContactCard.module.css";
import classes2 from "./EmailSentResult.module.css";

const EmailSentSuccess = (props) => {
  console.log(props.elementHeight);
  const darkCtx = useContext(DarkModeContext);

  const contactColor = darkCtx.isDarkMode
    ? "contact-color-dark"
    : "contact-color-light";

  return (
    <section className={classes["form-card"]} id="contact">
      <div className={contactColor}>
        <h3 className={classes2.warning}>
          {props.isSent ? "I received your email!" : "Failed to send email!"}
        </h3>
      </div>
    </section>
  );
};

export default EmailSentSuccess;
