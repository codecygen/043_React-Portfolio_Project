import React, { useEffect, useState, useContext } from 'react';

import NavButton from '../ui/buttons/NavButton';
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

import Hamburger from '../ui/buttons/Hamburger';
import MenuOverlay from './MenuOverlay';

import DarkModeContext from '../../store/color-context';

import classes from './NavBar.module.css';

const NavBar = props => {
    const darkCtx = useContext(DarkModeContext);

    const navButtons = [
        {
            key: 1,
            name: 'Home',
            link: '#home'
        },

        {
            key: 2,
            name: 'Techs',
            link: '#tools'
        },

        {
            key: 3,
            name: 'Blog',
            link: 'https://vercel-083-next-js-blog-website.vercel.app/'
        },

        {
            key: 4,
            name: 'Websites',
            link: '#websites'
        },

        {
            key: 5,
            name: 'Projects',
            link: '#projects'
        },

        {
            key: 6,
            name: 'Contact',
            link: '#contact'
        },
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuState, setMenuState] = useState(false);

    const disableScroll = () => {
        let x = window.scrollX;
        let y = window.scrollY;
        window.onscroll = () => { window.scrollTo(x, y); };
    };

    const enableScroll = () => {
        window.onscroll = () => {};
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

    const largeScreenMenu = windowWidth > 1300 && 
    <div className={classes['second']}>
        {buttons}
    </div>;

    const darkModeIcon = <div className={`${classes['second']} ${classes.margin}`}>
        <IoIosMoon className={`${classes['moon-icon']}`} onClick={darkCtx.darkModeHandler} />
    </div>

    const lightModeIcon = <div className={`${classes['second']} ${classes.margin}`}>
        <IoSunny className={`${classes['sun-icon']}`} onClick={darkCtx.darkModeHandler} />
    </div>

    const hamburgerIcon = windowWidth <= 1300 && 
    <div onClick={menuClickHandler}>
        <Hamburger clickState={menuState} />
    </div>;

    const mobileScreenMenu = windowWidth <= 1300 &&
        <MenuOverlay
            navButtons={navButtons}
            year={props.year}
            clickState={menuState}
            menuItemClickHandler={menuClickHandler}
    />

    const navClass = darkCtx.isDarkMode ? `${classes.navbar} navbar-color-dark` : `${classes.navbar} navbar-color-light`;

    return (
        <div>
            {mobileScreenMenu}
            
            <nav className={navClass}>
                <h1>ARAS</h1>
                {largeScreenMenu}
                {darkCtx.isDarkMode ? lightModeIcon : darkModeIcon}
                {hamburgerIcon}
            </nav>

            
        </div>
    );
};

export default NavBar;
