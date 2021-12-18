import React from 'react';
import classes from './MenuButton.module.css';

const MenuButton = props => {
    return (
        <a href={props.hyperlink}>{props.children}</a>
    );
};

export default MenuButton;