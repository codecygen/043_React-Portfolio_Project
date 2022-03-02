import React, { useContext } from 'react';
import classes from './Hamburger.module.css';

import DarkModeContext from '../../../store/color-context';

const Hamburger = props => {

    const darkCtx = useContext(DarkModeContext);

    const clickedClasses = `${classes.ham} ${classes.ham4} ${classes.hamRotate} ${classes.active}`;
    const notClickedClasses = `${classes.ham} ${classes.ham4} ${classes.hamRotate}`;
    const burgerIconClasses = props.clickState ? clickedClasses : notClickedClasses;

    const lineShapeColor = darkCtx.isDarkMode ? `${classes['line-dark']}` : `${classes['line-light']}`;

    return (
        <svg className={burgerIconClasses} viewBox="0 0 100 100" width="80">
            <path
                className={`${lineShapeColor} ${classes.top}`}
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
                className={lineShapeColor}
                d="m 70,50 h -40" />
            <path
                className={`${lineShapeColor} ${classes.bottom}`}
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
    );
};

export default Hamburger;
