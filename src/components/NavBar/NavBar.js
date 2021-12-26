import React from 'react';

import MenuButton from '../Buttons/MenuButton';
import ToggleSwitch from '../Buttons/ToggleSwitch';

import HomeIcon from '../assets/menu-icons/HomeIcon';
import GitHubIcon from '../assets/menu-icons/GitHubIcon';
import ProjectsIcon from '../assets/menu-icons/ProjectsIcon';
import AboutIcon from '../assets/menu-icons/AboutIcon';

import classes from './NavBar.module.css';

const NavBar = () => {
    const navButtons = [
        {
            key: 1,
            name: 'Home',
            link: '#Home',
            icon: <HomeIcon />
        },

        {
            key: 2,
            name: 'Github',
            link: '#Github',
            icon: <GitHubIcon />
        },

        {
            key: 3,
            name: 'Projects',
            link: '#Projects',
            icon: <ProjectsIcon />
        },

        {
            key: 4,
            name: 'About',
            link: '#About',
            icon: <AboutIcon />
        },
    ];

    const buttons = navButtons.map(eachObject => (
        <MenuButton
            key={eachObject.key}
            hyperlink={eachObject.link}
            menuButtonIcon={eachObject.icon}
            menuButtonName={eachObject.name}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <h1>Aras Sen</h1>
            <div className={classes['second-div']}>{buttons}</div>
            <div><ToggleSwitch /></div>
        </nav>
    );
};

export default NavBar;
