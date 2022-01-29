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
                '1_IP': data.ip,
                '2_Name': enteredName,
                '3_Subject': enteredSubject,
                '4_Message': enteredMessage
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
        const year = new Date().getFullYear();
        const month = ('0' + (new Date().getMonth() + 1)).slice(-2);
        const day = ('0' + (new Date().getDate())).slice(-2);;

        const fetchLink = `https://portfolio-email-sending-default-rtdb.firebaseio.com/email/${year}-${month}/day-${day}.json`;
        const res = await fetch(fetchLink, {
            method: 'post',
            body: JSON.stringify(email),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);
        console.log(res.ok);
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
