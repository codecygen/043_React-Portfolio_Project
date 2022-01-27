import React from 'react';
import useInput from '../../hooks/use-input';

import Button from '../ui/buttons/Button';
import classes from './Contact.module.css';

const Contact = () => {

    const {
        value: enteredName,
        valueChangeHandler: nameChangeHandler,
        formSubmitHandler,
        onBlurHandler: nameOnBlurHandler,
        hasError: nameHasError,
    } = useInput();

    const {
        value: enteredSubject,
        valueChangeHandler: subjectChangeHandler,
        onBlurHandler: subjectOnBlurHandler,
        hasError: subjectHasError,
    } = useInput();

    const {
        value: enteredMessage,
        valueChangeHandler: messageChangeHandler,
        onBlurHandler: messageOnBlurHandler,
        hasError: messageHasError,
    } = useInput();

    console.log(`Typed name: ${enteredName}`);
    console.log(`Typed subject: ${enteredSubject}`);
    console.log(`Typed message: ${enteredMessage}`);

    return (
        <section className={classes['form-card']} id='contact'>
            <form onSubmit={formSubmitHandler}>
                <h3>Contact Form</h3>
                <div className={classes['input-div']}>
                    <label htmlFor='name'>Your Name</label>
                    <input
                        type='text' 
                        id='name' 
                        placeholder='Name...' 
                        onChange={nameChangeHandler} 
                        value={enteredName} 
                        onBlur={nameOnBlurHandler}
                    />
                </div>

                <div className={classes['input-div']}>
                    <label htmlFor='subject'>Your Subject</label>
                    <input
                        type='text' 
                        id='subject' 
                        placeholder='Subject...' 
                        onChange={subjectChangeHandler} 
                        value={enteredSubject} 
                        onBlur={subjectOnBlurHandler}
                    />
                </div>

                <div className={classes['input-div']}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea
                        type='text' 
                        id='message' 
                        placeholder='Message...' 
                        onChange={messageChangeHandler} 
                        value={enteredMessage} 
                        onBlur={messageOnBlurHandler}
                    />
                </div>

                <Button>Shoot It!</Button>
            </form>
        </section>
    );
};

export default Contact;
