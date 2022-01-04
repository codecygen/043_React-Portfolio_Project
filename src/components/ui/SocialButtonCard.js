import React from 'react';
import classes from './SocialButtonCard.module.css';

const ButtonCard = props => {
    return (
        <a href={props.link} className={`${classes.card} card-color`}>
                {props.children}
        </a>
    );
};

export default ButtonCard;