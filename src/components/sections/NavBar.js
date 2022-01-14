import React, { useEffect, useState, useContext } from 'react';

import NavButton from '../ui/buttons/NavButton';
import { IoSunny } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

import Hamburger from '../ui/buttons/Hamburger';
import MenuOverlay from './MenuOverlay';

import NavContext from '../../store/nav-context';

import classes from './NavBar.module.css';

const NavBar = props => {
    const navCtx = useContext(NavContext);

    const navButtons = [
        {
            key: 1,
            name: 'Home',
            link: '#home'
        },

        {
            key: 2,
            name: 'Tools',
            link: '#tools'
        },

        {
            key: 3,
            name: 'Projects',
            link: '#projects'
        },

        {
            key: 4,
            name: 'Contact',
            link: '#contact'
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
        <AiFillStar className={`${classes['moon-icon']}`} onClick={navCtx.darkModeHandler} />
    </div>

    const lightModeIcon = <div className={`${classes['second']} ${classes.margin}`}>
        <IoSunny className={`${classes['sun-icon']}`} onClick={navCtx.darkModeHandler} />
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

    return (
        <>
            <nav className={`${classes.navbar} navbar-color`}>
                <h1>ARAS SEN</h1>
                {largeScreenMenu}
                {navCtx.isDarkMode ? lightModeIcon : darkModeIcon}
                {hamburgerIcon}
            </nav>

            {mobileScreenMenu}
        </>
    );
};

export default NavBar;
