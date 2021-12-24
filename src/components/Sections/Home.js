import React from 'react';

import myImage from '../../Images/Me.jpeg';
import Divider from '../Divider/Divider';

import classes from './Home.module.css';

const Home = () => {
    return (
        <header className={classes.home}>
            <section className={classes["same-line"]}>
                <img src={myImage} alt="profile" className={classes.myImage}
                /><div>
                    <h1>Aras Sen</h1>
                    <h3>Full Stack Web Developer</h3>
                </div>
            </section>
            <Divider />
            <h2>Hello Everyone! My Name is Aras</h2>
            <p className={classes['home-p']}>
                I am a full stack web developer. 
                I use HTML, CSS and Javascript on a daily basis. 
                I try to keep up with the latest practices in industry 
                to bring the best result by pushing my limits.
            </p>

            <p className={classes['home-p']}>
                Although I started learning programming many years ago 
                (around 2008) I made my first website in 2019.
            </p>

            <p className={classes['home-p']}>
                In February 2021, I started fully focusing on web development 
                and programming. Since then, I wake up completely motivated to 
                learn something new everyday.
            </p>
            
            <Divider />

        </header>
    );
};

export default Home;