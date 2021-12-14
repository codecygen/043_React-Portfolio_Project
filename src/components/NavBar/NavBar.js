import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    const navButtons = [
        {
            key: 1,
            name: 'Home'
        },

        {
            key: 2,
            name: 'Github'
        },

        {
            key: 3,
            name: 'Projects'
        },

        {
            key: 4,
            name: 'About'
        },
    ];

    const buttons = navButtons.map(eachObject => (
        <button
            key={eachObject.key}>
            {eachObject.name}
        </button>
    ));

    return (
        <nav className={classes.navbar}>
            <div>Aras Sen</div>
            <div className={classes['second-div']}>{buttons}</div>
            <div>Logout</div>
        </nav>
    );
};

export default NavBar;
