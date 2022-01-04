import React from 'react';
import classes from './Footer.module.css';
import SocialMedia from '../ui/SocialMedia';

const Footer = () => {
    return (
        <footer className={`${classes.footer} footer-color`}>
            <SocialMedia />
        </footer>
    );
};

export default Footer;
