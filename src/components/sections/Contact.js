import React from 'react';
import useInput from '../../hooks/use-input';

import Button from '../ui/buttons/Button';
import classes from './Contact.module.css';

const Contact = () => {


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

        console.log(`Submitted name is ${enteredName}`);
        console.log(`Submitted name is ${enteredSubject}`);
        console.log(`Submitted name is ${enteredMessage}`);

        resetName();
        resetSubject();
        resetMessage();

        // clientIP = fetch('https://www.myexternalip.com/json')
        //     .then(res => res.json())
        //     .then(data => data.ip)
        // ;

        const getIP = async () => {
            const result = await fetch('https://www.myexternalip.com/json')
            const data = await result.json();

            const email = {
                '1_Name': enteredName,
                '2_Subject': enteredSubject,
                '3_Message': enteredMessage,
                '4_IP': data.ip
            }

            emailSendHandler(email);
        }

        getIP();
    };

    // const emailFetchHandler = async () => {
    //     const res = await fetch('https://portfolio-email-sending-default-rtdb.firebaseio.com/email.json');
    //     const data = await res.json();

    //     const allEmails = [];

    //     for (const key in data) {
    //         allEmails.push({

    //         });
    //     }
    // }

    const emailSendHandler = async (email) => {
        const date = new Date().toLocaleDateString('en-CA');
        const fetchLink = `https://portfolio-email-sending-default-rtdb.firebaseio.com/email_${date}.json`;
        const res = await fetch(fetchLink, {
            method: 'post',
            body: JSON.stringify(email),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const res2 = await fetch('https://portfolio-email-sending-default-rtdb.firebaseio.com/email.json', {
            method: 'post',
            body: JSON.stringify(email),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);
        console.log(res.ok);

        console.log(res2.status);
        console.log(res.ok)
    }

    return (
        <section className={classes['form-card']} id='contact'>
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
        </section>
    );
};

export default Contact;
