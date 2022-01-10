import React, { useEffect, useState } from 'react';

import NavButton from '../ui/buttons/NavButton';
import { IoSunny } from "react-icons/io5";
import Hamburger from '../ui/buttons/Hamburger';
import MenuOverlay from './MenuOverlay';

import classes from './NavBar.module.css';

const NavBar = props => {
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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuState, setMenuState] = useState(false);

    const disableScroll = () => {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = () => { window.scrollTo(x, y); };
    };

    const enableScroll = () => {
        document.body.classList.remove('body-noscroll');

        window.onscroll = () => { };
    };

    const menuClickHandler = () => {
        setMenuState(prevValue => {
            if (prevValue === true) {
                enableScroll();
                return false;
            } else {
                disableScroll();
                return true;
            }
        });
    };

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
        <>
            <nav className={`${classes.navbar} navbar-color`}>
                <h1>ARAS SEN</h1>
                {windowWidth > 1300 && <div className={classes['second']}>{buttons}</div>}
                <div className={`${classes['second']} ${classes.margin}`}><IoSunny className='sun-icon' /></div>
                {windowWidth <= 1300 && <div onClick={menuClickHandler}><Hamburger clickState={menuState} /></div>}
            </nav>


            <MenuOverlay
                navButtons={navButtons}
                year={props.year}
                clickState={menuState}
            />
        </>
    );
};

export default NavBar;
