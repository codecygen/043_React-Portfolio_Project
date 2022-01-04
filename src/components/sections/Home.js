import React from 'react';

import myImage from '../../assets/images/Me.jpeg';
import Divider from '../ui/Divider';

import SocialMedia from '../ui/SocialMedia';
import Button from '../ui/buttons/Button';

import classes from './Home.module.css';

const Home = () => {
    return (
        <header className={classes.home}>
            <section className={classes["same-line"]}>
                <div className={classes.c1}>
                    <img src={myImage} alt="profile" />
                </div
                ><div className={classes.c2}>
                    <h1>Aras Sen</h1>
                    <h3>Full Stack Web Developer</h3>
                    <p className={classes['landing-p']}>
                        I am passionate about
                        creating applications with better UI and UX!
                    </p>
                    <div className={classes['link-container']}>
                        <Button className={classes['margin-right']}>Resume</Button>
                        <SocialMedia />
                    </div>
                </div>
            </section>
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