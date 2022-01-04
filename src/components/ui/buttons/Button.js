import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    return (
        <a href={props.link} className={`${classes.card} button-color`}>
                {props.children}
        </a>
    );
};

export default Button;
