import React from 'react';
import MenuButton from '../Buttons/MenuButton';
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
            link: 'https://github.com/codecygen'
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
        <MenuButton
            key={eachObject.key}
            hyperlink={eachObject.link}>
            {eachObject.name}
        </MenuButton>
    ));

    return (
        <nav className={classes.navbar}>
            <h1>Aras Sen</h1>
            <div className={classes['second-div']}>{buttons}</div>
            <button>switch mode</button>
        </nav>
    );
};

export default NavBar;
