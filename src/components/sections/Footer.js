import React from 'react';
import classes from './Footer.module.css';
import SocialMedia from '../ui/SocialMedia';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='footer-color'>
                <SocialMedia />
                <h4>Developed and designed by</h4>
                <p className={classes['footer-decorative']}>ARAS SEN</p>
                <h4>©{currentYear} Aras Sen</h4>
            </div>
        </footer>
    );
};

export default Footer;
