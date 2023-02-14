import { useState } from "react";

import ContactCard from "../ui/ContactCard";
import EmailSentResult from "../ui/EmailSentResult";

import sendEmailData from "../../utils/sendEmailData";

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState();

  const submitEmail = async (emailData) => {
    const emailSendRes = await sendEmailData(emailData);

    if (!emailSendRes) {
      setIsEmailSent(false);
    }

    if (emailSendRes.message === "Successfully sent email data!") {
      setIsEmailSent(true);
      return;
    } else {
      setIsEmailSent(false);
    }
  };

  return (
    <>
      {isEmailSent === undefined ? (
        <ContactCard submitMessage={submitEmail} />
      ) : (
        // even if it is true or false it sends result 
        // based on the result it will show error or success message
        <EmailSentResult isSent={isEmailSent} />
      )}
    </>
  );
};

export default Contact;
