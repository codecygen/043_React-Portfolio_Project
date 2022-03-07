import React, { useContext } from 'react';
import classes from './Button.module.css';

import DarkModeContext from '../../../store/color-context';

const Button = props => {
    const darkCtx = useContext(DarkModeContext);

    const buttonClasses = darkCtx.isDarkMode ? `${classes.card} button-color-dark` : `${classes.card} button-color-light`

    return (
        <button className={buttonClasses}>
                {props.children}
        </button>
    );
};

export default Button;
