import React, { useState } from 'react';
import useInput from '../../hooks/use-input';

import Button from '../ui/buttons/Button';
import classes from './Contact.module.css';

const Contact = () => {
    const [isSent, setIsSent] = useState(false);

    const {
        value: enteredName,
        valueChangeHandler: nameChangeHandler,
        onBlurHandler: nameOnBlurHandler,
        isValueValid: isNameValid,
        inputClasses: nameInputClasses,
        errorMessage: nameErrorMessage,
        reset: resetName
    } = useInput('Name');

    const {
        value: enteredSubject,
        valueChangeHandler: subjectChangeHandler,
        onBlurHandler: subjectOnBlurHandler,
        isValueValid: isSubjectValid,
        inputClasses: subjectInputClasses,
        errorMessage: subjectErrorMessage,
        reset: resetSubject
    } = useInput('Subject');

    const {
        value: enteredMessage,
        valueChangeHandler: messageChangeHandler,
        onBlurHandler: messageOnBlurHandler,
        isValueValid: isMessageValid,
        inputClasses: messageInputClasses,
        errorMessage: messageErrorMessage,
        reset: resetMessage
    } = useInput('Message');

    const formSubmitHandler = event => {
        event.preventDefault();

        let isFormValid = false;

        if (isNameValid && isSubjectValid && isMessageValid) {
            isFormValid = true;
        } else {
            isFormValid = false;
        }

        if (!isFormValid) {
            return;
        }

        const submitDatabase = async () => {

            const postEmail = async () => {
                const response = await fetch('https://www.myexternalip.com/json');
                const data = await response.json();

                const date = new Date().toLocaleString('EN-CA', { timeZone: 'America/New_York' });

                const resGeo = await fetch(`https://ipwhois.app/json/${data.ip}`);
                const dataGeo = await resGeo.json();

                const postData = {
                    date: date,
                    ip: data.ip,
                    place: `${dataGeo.city}/${dataGeo.country}`,
                    name: enteredName,
                    subject: enteredSubject,
                    message: enteredMessage
                };

                try {
                    const res = await fetch('http://localhost:8000/email',
                        {
                            method: 'POST',
                            body: JSON.stringify({ ...postData }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    );

                    const serverData = await res.json();
                    setIsSent(serverData.isExist);

                } catch (err) {
                    console.error(err);
                }
            }

            await postEmail();
        }

        submitDatabase();

        resetName();
        resetSubject();
        resetMessage();
    };

    return (
        <section className={classes['form-card']} id='contact'>
            <div>
                <form onSubmit={formSubmitHandler}>
                    <h3>Contact Form</h3>
                    <div className={classes['input-div']}>
                        <label htmlFor='name'>Your Name</label>
                        <input
                            className={nameInputClasses}
                            type='text'
                            id='name'
                            placeholder='Name...'
                            onChange={nameChangeHandler}
                            value={enteredName}
                            onBlur={nameOnBlurHandler}
                            disabled={isSent}
                        />
                        {nameErrorMessage}
                    </div>

                    <div className={classes['input-div']}>
                        <label htmlFor='subject'>Your Subject</label>
                        <input
                            className={subjectInputClasses}
                            type='text'
                            id='subject'
                            placeholder='Subject...'
                            onChange={subjectChangeHandler}
                            value={enteredSubject}
                            onBlur={subjectOnBlurHandler}
                            disabled={isSent}
                        />
                        {subjectErrorMessage}
                    </div>

                    <div className={classes['input-div']}>
                        <label htmlFor='message'>Your Message</label>
                        <textarea
                            className={messageInputClasses}
                            type='text'
                            id='message'
                            placeholder='Message...'
                            onChange={messageChangeHandler}
                            value={enteredMessage}
                            onBlur={messageOnBlurHandler}
                            disabled={isSent}
                        />
                        {messageErrorMessage}
                    </div>

                    <Button>{isSent ? 'Will Contact Shortly!' : 'Shoot It!'}</Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
