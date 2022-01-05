import React from 'react';

import NavButton from '../ui/buttons/NavButton';
import ToggleSwitch from '../ui/buttons/ToggleSwitch';

// import HomeIcon from '../../assets/menu-icons/HomeIcon';
// import GitHubIcon from '../../assets/menu-icons/GitHubIcon';
// import ProjectsIcon from '../../assets/menu-icons/ProjectsIcon';
// import AboutIcon from '../../assets/menu-icons/AboutIcon';

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
            name: 'Github',
            link: '#Github'
        },

        {
            key: 3,
            name: 'Projects',
            link: '#Projects'
        },

        {
            key: 4,
            name: 'About',
            link: '#About'
        },
    ];

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
            <div className={classes['second-div']}>{buttons}</div>
            <div><ToggleSwitch /></div>
        </nav>
    );
};

export default NavBar;
