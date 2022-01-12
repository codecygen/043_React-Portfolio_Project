import React from 'react';

import Button from '../ui/buttons/Button';
import classes from './Contact.module.css';

const Contact = () => {
    return (
        <section className={classes['form-card']} id='contact'>
            <form>
                <h3>Contact Form</h3>
                <div className={classes['input-div']}>
                    <label htmlFor='name'>Your Name</label>
                    <input
                        type='text'
                        id='name'
                        required
                        placeholder='Name...'
                    />
                </div>

                <div className={classes['input-div']}>
                    <label htmlFor='subject'>Your Subject</label>
                    <input
                        type='text'
                        id='subject'
                        required
                        placeholder='Subject...'
                    />
                </div>

                <div className={classes['input-div']}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea
                        type='text'
                        id='message'
                        required
                        placeholder='Message...'
                    />
                </div>

                <Button>Shoot It!</Button>
            </form>
        </section>
    );
};

export default Contact;
