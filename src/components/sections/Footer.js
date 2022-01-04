import React from 'react';
import classes from './Footer.module.css';
import SocialMedia from '../ui/SocialMedia';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={`${classes.footer} footer-color`}>
            <div>
                <SocialMedia />
                <h4>©{currentYear} Aras Sen</h4>
            </div>
        </footer>
    );
};

export default Footer;
