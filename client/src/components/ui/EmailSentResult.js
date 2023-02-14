import { useContext } from "react";
import DarkModeContext from "../../store/color-context";

import classes from "./ContactCard.module.css";
import classes2 from "./EmailSentResult.module.css";

const EmailSentSuccess = (props) => {
  const darkCtx = useContext(DarkModeContext);

  const contactColor = darkCtx.isDarkMode
    ? "contact-color-dark"
    : "contact-color-light";
  
  return (
    <section className={classes["form-card"]} id="contact">
      <div className={contactColor}>
        <p className={classes2.warning}>{props.isSent ? 'success!' : 'fail!'}</p>
      </div>
    </section>
  );
};

export default EmailSentSuccess;
