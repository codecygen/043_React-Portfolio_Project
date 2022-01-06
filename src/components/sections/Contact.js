import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
    return (
        <section className={classes['form-card']}>
            <form>
                <div className={classes['input-div']}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                </div>

                <div className={classes['input-div']}>
                    <label htmlFor='subject'>Subject</label>
                    <input type='text' id='subject' />
                </div>

                <div className={classes['input-div']}>
                    <label htmlFor='message'>Message</label>
                    <textarea type='text' id='message' />
                </div>
            </form>
        </section>
    );
};

export default Contact;
