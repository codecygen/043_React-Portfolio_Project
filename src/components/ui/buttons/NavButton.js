import React from 'react';
import classes from './NavButton.module.css';

const MenuButton = props => {
    return (
        <a href={props.hyperlink} className={classes.a}>
            {props.menuButtonIcon}{props.menuButtonName}
        </a>
    );
};

export default MenuButton;