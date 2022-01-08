import React, { useEffect, useState } from 'react';

import NavButton from '../ui/buttons/NavButton';
import { IoSunny } from "react-icons/io5";

import classes from './NavBar.module.css';

const NavBar = () => {
    const navButtons = [
        {
            key: 1,
            name: 'Home',
            link: '#Home'
        },

        {
            key: 2,
            name: 'Tools',
            link: '#Tools'
        },

        {
            key: 3,
            name: 'Projects',
            link: '#Projects'
        },

        {
            key: 4,
            name: 'Contact',
            link: '#Contact'
        },
    ];

    const [windowWidth, setWindowWidth] = useState('0');

    useEffect(() => {
        const interval = setInterval(() => {
            setWindowWidth(window.innerWidth);
        }, 100);

        return () => clearInterval(interval);
    }, [windowWidth]);

    const buttons = navButtons.map(eachObject => (
        <NavButton
            key={eachObject.key}
            hyperlink={eachObject.link}
            menuButtonName={eachObject.name}
        />
    ));

    return (
        <nav className={`${classes.navbar} navbar-color`}>
            <h1>ARAS SEN</h1>
            {windowWidth > 1300 && <div className={classes['second-div']}>{buttons}</div>}
            <div className={classes['second-div']}><IoSunny className='sun-icon' /></div>
            {windowWidth <= 1300 && <div>Test</div>}
        </nav>
    );
};

export default NavBar;
