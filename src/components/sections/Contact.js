import React from 'react';
import useInput from '../../hooks/use-input';

import Button from '../ui/buttons/Button';
import classes from './Contact.module.css';

const Contact = () => {

    let clientIP = '';

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

        const aras = fetch('https://www.myexternalip.com/json')
            .then(res => res.json())
            .then(data => data.ip)
        ;

        const address = async () => {
            clientIP = await aras;
        }

        address();

        console.log(clientIP);

        const email = {
            '1_Name': enteredName,
            '2_Subject': enteredSubject,
            '3_Message': enteredMessage,
            '4_IP' : clientIP
        }

        emailSendHandler(email);
    };

    const emailSendHandler = async (email) => {
        const res = await fetch('https://portfolio-email-sending-default-rtdb.firebaseio.com/email.json', {
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
