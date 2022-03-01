import React, { useContext } from 'react';
import useInput from '../../hooks/use-input';

import Button from '../ui/buttons/Button';
import classes from './Contact.module.css';

import DarkModeContext from '../../store/color-context';

const Contact = () => {

    const darkCtx = useContext(DarkModeContext); 

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

        resetName();
        resetSubject();
        resetMessage();

        const submitDatabase = async () => {
            const result = await fetch('https://www.myexternalip.com/json');
            const data = await result.json();

            const isPostedBefore = await emailFetchHandler(data.ip);

            if (isPostedBefore) {
                console.log('You already posted a message!');
                return;
            }

            const email = {
                '1_IP': data.ip,
                '2_Name': enteredName,
                '3_Subject': enteredSubject,
                '4_Message': enteredMessage
            }

            await emailSendHandler(email);
            console.log('Message Submitted!');
        }

        submitDatabase();
    };

    const emailFetchHandler = async clientIP => {
        try {
            const res = await fetch('https://portfolio-email-sending-default-rtdb.firebaseio.com/emails.json');

            if (!res.ok) {
                throw new Error(`Something went wrong! HTTP Status: ${res.status}`);
            }

            const data = await res.json();

            const loadedEmails = [];

            for (const key1 in data) {
                for (const key2 in data[key1]) {
                    for (const key3 in data[key1][key2]) {
                        loadedEmails.push(
                            { ...data[key1][key2][key3] }
                        );
                    }
                }
            }

            const databaseIPs = [];

            for (const key4 in loadedEmails) {
                databaseIPs.push(loadedEmails[key4]['1_IP']);
            }

            return databaseIPs.includes(clientIP);
        } catch (error) {
            console.log(error.message);
        }
    }

    const emailSendHandler = async (email) => {
        const yearMonth = new Date().toLocaleDateString('EN-CA').slice(0, 7);
        const day = new Date().getDate();

        const fetchLink = `https://portfolio-email-sending-default-rtdb.firebaseio.com/emails/${yearMonth}/day-${day}.json`;
        const res = await fetch(fetchLink, {
            method: 'post',
            body: JSON.stringify(email),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error(`Something went wrong! HTTP Status: ${res.status}`);
        }
    }

    const contactColor = darkCtx.isDarkMode ? `contact-color-dark` : `contact-color-light`;

    return (
        <section className={classes['form-card']} id='contact'>
            <div className={contactColor}>
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
                        />
                        {messageErrorMessage}
                    </div>

                    <Button>Shoot It!</Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
