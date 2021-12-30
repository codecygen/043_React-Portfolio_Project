import React from 'react';
import classes from './ButtonCard.module.css';

const ButtonCard = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
};

export default ButtonCard;
