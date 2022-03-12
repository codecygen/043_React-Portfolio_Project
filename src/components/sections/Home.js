import React, { useContext } from 'react';

import myImage from '../../assets/images/Me.jpeg';
import Divider from '../ui/Divider';

import SocialMedia from '../ui/SocialMedia';
import Button from '../ui/buttons/Button';

import { FaCanadianMapleLeaf } from "react-icons/fa";

import classes from './Home.module.css';

import DarkModeContext from '../../store/color-context';

const Home = () => {
    const darkCtx = useContext(DarkModeContext);

    const buttonColor = darkCtx.isDarkMode ? 'button-color-dark' : 'button-color-light';

    return (
        <header className={classes.home} id='home'>
            <div className={classes["same-line"]}>
                <div className={classes["img-div"]}>
                    <img src={myImage} alt="profile" />
                </div>
                
                <div>
                    <h1>Aras Sen</h1>
                    <h3>Full Stack Web Developer</h3>
                    <h4 className={classes['same-line']}>
                        Based in Toronto 
                        <FaCanadianMapleLeaf className='maple-icon' />
                    </h4>
                    <p>
                        I am passionate about
                        creating applications with better UI and UX!
                    </p>
                    <div className={classes['link-container']}>
                        <Button 
                            className={buttonColor}
                        >
                                <a href="https://docs.google.com/document/d/12zfXCNasTuXyz1FlBpms2NXHUS02N2xP/edit?usp=sharing&ouid=100896222628235252739&rtpof=true&sd=true">
                                    Resume
                                </a>
                        </Button>
                        <SocialMedia />
                    </div>
                </div>
            </div>
            <Divider />
            <h2>Hello Everyone! My Name is Aras</h2>
            <p>
                I am a full stack web developer.
                I use HTML, CSS and Javascript on a daily basis.
                I try to keep up with the latest practices in industry
                to bring the best result by pushing my limits.
            </p>

            <p>
                Although I started learning programming many years ago
                (around 2008) I made my first website in 2019.
            </p>

            <p>
                In February 2021, I started fully focusing on web development
                and programming. Since then, everyday I wake up completely motivated to
                learn something new.
            </p>

            <Divider />

        </header>
    );
};

export default Home;