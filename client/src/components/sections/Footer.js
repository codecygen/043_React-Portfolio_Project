import React, { useContext } from 'react';
import classes from './Footer.module.css';
import SocialMedia from '../ui/SocialMedia';

import { GiBroadheadArrow } from 'react-icons/gi';
import { FaCanadianMapleLeaf } from "react-icons/fa";

import DarkModeContext from '../../store/color-context';

const Footer = props => {

    const darkCtx = useContext(DarkModeContext);

    const scrollUp = () => {
    
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    };

    const footerColor = darkCtx.isDarkMode ? 'footer-color-dark' : 'footer-color-light';
    const bottomArrowColor = darkCtx.isDarkMode ? `${classes['rotate-arrow-dark']}` : `${classes['rotate-arrow-light']}`;

    return (
        <footer className={classes.footer}>
            <div className={footerColor}>
                <SocialMedia />
                
                <p className={classes['footer-decorative']}>
                    FROM TORONTO <FaCanadianMapleLeaf className='maple-icon' />
                </p>

                <h4>Developed and designed by</h4>
                <h4> Vahit © {props.year}</h4>
                <GiBroadheadArrow className={bottomArrowColor} onClick={scrollUp} />
            </div>
        </footer>
    );
};

export default Footer;
