import React from 'react';
import classes from './Hamburger.module.css';

const Hamburger = props => {

    const clickedClasses = `${classes.ham} ${classes.ham4} ${classes.hamRotate} ${classes.active}`;
    const notClickedClasses = `${classes.ham} ${classes.ham4} ${classes.hamRotate}`;
    const burgerIconClasses = props.clickState ? clickedClasses : notClickedClasses;

    return (
        <svg className={burgerIconClasses} viewBox="0 0 100 100" width="80">
            <path
                className={`${classes.line} ${classes.top}`}
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
                className={classes.line}
                d="m 70,50 h -40" />
            <path
                className={`${classes.line} ${classes.bottom}`}
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
    );
};

export default Hamburger;
