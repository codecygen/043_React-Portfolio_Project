import React from 'react';

import myImage from '../../Images/Me.jpeg';

import classes from './Home.module.css';

const Home = () => {
    return (
        <header className={classes.home}>
            <img src={myImage} alt="This is my image" className={classes.myImage} />
            <h1>Aras Sen</h1>
            <h3>Full Stack Web Developer</h3>
        </header>
    );
};

export default Home;