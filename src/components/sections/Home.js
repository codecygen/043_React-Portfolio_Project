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
                                <a href="https://drive.google.com/file/d/1vVnndDiBdmCY4jN7sAM8_au4-qVq1v9P/view?usp=sharing">
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
                (around 2008), I made my first website in December 2018.
            </p>

            <p>
                In February 2021, I started to fully focus on web development
                and programming. Since then, I wake up everyday completely motivated to
                learn something new.
            </p>

            <Divider />

        </header>
    );
};

export default Home;