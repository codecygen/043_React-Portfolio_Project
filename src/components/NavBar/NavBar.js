import React from 'react';
import MenuButton from '../Buttons/MenuButton';
import ToggleSwitch from '../Buttons/ToggleSwitch';
import HomeIcon from '../Icons/HomeIcon';
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
            icon: <HomeIcon />
            // link: 'https://github.com/codecygen'
        },

        {
            key: 3,
            name: 'Projects',
            link: '#Projects',
            icon: <HomeIcon />
        },

        {
            key: 4,
            name: 'About',
            link: '#About',
            icon: <HomeIcon />
        },
    ];

    const buttons = navButtons.map(eachObject => (
        <MenuButton
            key={eachObject.key}
            hyperlink={eachObject.link}>
            {eachObject.icon}{eachObject.name}
        </MenuButton>
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
