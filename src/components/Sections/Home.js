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

        </header>
    );
};

export default Home;