import React, { useContext } from 'react';
import DarkModeContext from '../../store/color-context';
import classes from './Card.module.css';

const Card = props => {
    const darkCtx = useContext(DarkModeContext);

    const cardColor = darkCtx ? `${classes.card} card-color-dark` : `${classes.card} card-color-light`;

    return (
        <div className={cardColor}>
            {props.children}
        </div>
    );
};

export default Card;
