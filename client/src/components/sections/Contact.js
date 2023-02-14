import { useState } from "react";

import ContactCard from "../ui/ContactCard";
import sendEmailData from "../../utils/sendEmailData";

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState();

  const submitEmail = async (emailData) => {
    console.log(emailData);

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
      {isEmailSent ? <p>Sent</p> : <ContactCard submitMessage={submitEmail} />}
    </>
  );
};

export default Contact;
