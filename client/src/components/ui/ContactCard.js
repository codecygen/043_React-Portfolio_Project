import React, { useContext, useState } from "react";
import useInput from "../../hooks/use-input";
import checkIP from "../../utils/checkIP";

import Button from "../ui/buttons/Button";
import Spinner from "./Spinner";
import classes from "./ContactCard.module.css";

import DarkModeContext from "../../store/color-context";
import useAssessHeight from "../../hooks/use-assessHeight";

const ContactCard = (props) => {
  const [isClicked, setIsClicked] = useState();
  const darkCtx = useContext(DarkModeContext);
  const contactFormHeight = useAssessHeight("contact");

  const {
    value: enteredName,
    valueChangeHandler: nameChangeHandler,
    onBlurHandler: nameOnBlurHandler,
    isValueValid: isNameValid,
    inputClasses: nameInputClasses,
    errorMessage: nameErrorMessage,
  } = useInput("Name");

  const {
    value: enteredSubject,
    valueChangeHandler: subjectChangeHandler,
    onBlurHandler: subjectOnBlurHandler,
    isValueValid: isSubjectValid,
    inputClasses: subjectInputClasses,
    errorMessage: subjectErrorMessage,
  } = useInput("Subject");

  const {
    value: enteredMessage,
    valueChangeHandler: messageChangeHandler,
    onBlurHandler: messageOnBlurHandler,
    isValueValid: isMessageValid,
    inputClasses: messageInputClasses,
    errorMessage: messageErrorMessage,
  } = useInput("Message");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const ip = await checkIP();

    let isFormValid = false;

    if (isNameValid && isSubjectValid && isMessageValid) {
      isFormValid = true;
    } else {
      isFormValid = false;
    }

    if (!isFormValid) {
      setIsClicked(false);
      return;
    }

    setIsClicked(true);

    const emailData = {
      IP: ip,
      Name: enteredName,
      Subject: enteredSubject,
      Message: enteredMessage,
    };

    props.submitMessage(emailData, contactFormHeight);
  };

  const contactColor = darkCtx.isDarkMode
    ? "contact-color-dark"
    : "contact-color-light";

  return (
    <section className={classes["form-card"]} id="contact">
      <div className={contactColor}>
        <form onSubmit={formSubmitHandler}>
          <h3>Contact Form</h3>
          <div className={classes["input-div"]}>
            <label htmlFor="name">Your Name</label>
            <input
              className={nameInputClasses}
              type="text"
              id="name"
              placeholder="Name..."
              onChange={nameChangeHandler}
              value={enteredName}
              onBlur={nameOnBlurHandler}
              // when clicked, input field becomes passive
              style={
                isClicked && {
                  pointerEvents: "none",
                  backgroundColor: "rgba(83, 82, 81, 0.5)",
                }
              }
            />
            {nameErrorMessage}
          </div>

          <div className={classes["input-div"]}>
            <label htmlFor="subject">Your Subject</label>
            <input
              className={subjectInputClasses}
              type="text"
              id="subject"
              placeholder="Subject..."
              onChange={subjectChangeHandler}
              value={enteredSubject}
              onBlur={subjectOnBlurHandler}
              // when clicked, input field becomes passive
              style={
                isClicked && {
                  pointerEvents: "none",
                  backgroundColor: "rgba(83, 82, 81, 0.5)",
                }
              }
            />
            {subjectErrorMessage}
          </div>

          <div className={classes["input-div"]}>
            <label htmlFor="message">Your Message</label>
            <textarea
              className={messageInputClasses}
              type="text"
              id="message"
              placeholder="Message..."
              onChange={messageChangeHandler}
              value={enteredMessage}
              onBlur={messageOnBlurHandler}
              // when clicked, input field becomes passive
              style={
                isClicked && {
                  pointerEvents: "none",
                  backgroundColor: "rgba(83, 82, 81, 0.5)",
                }
              }
            />
            {messageErrorMessage}
          </div>
          <div className={classes["button-spinner"]}>
            <Button padding="true">Shoot!</Button>
            {isClicked && <Spinner />}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactCard;
