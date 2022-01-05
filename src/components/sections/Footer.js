import React from 'react';
import classes from './Footer.module.css';
import SocialMedia from '../ui/SocialMedia';

import { GiBroadheadArrow } from 'react-icons/gi';

const currentYear = new Date().getFullYear();

const scrollUp = () => {
    
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
};

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='footer-color'>
                <SocialMedia />
                <h4>Developed and designed by</h4>
                <p className={classes['footer-decorative']}>ARAS SEN</p>
                <h4>©{currentYear} Aras Sen</h4>
                <GiBroadheadArrow className={classes['rotate-arrow']} onClick={scrollUp} />
            </div>
        </footer>
    );
};

export default Footer;
