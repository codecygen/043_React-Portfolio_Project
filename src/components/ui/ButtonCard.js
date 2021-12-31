import React from 'react';
import classes from './ButtonCard.module.css';

const ButtonCard = props => {
    return (
        <a href={props.link} className={classes.card}>
                {props.children}
        </a>
    );
};

export default ButtonCard;

// className={classes.card}