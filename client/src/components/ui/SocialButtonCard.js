import React, { useContext } from 'react';
import classes from './SocialButtonCard.module.css';

import DarkModeContext from '../../store/color-context';

const ButtonCard = props => {
    const darkCtx = useContext(DarkModeContext);

    const socialColor = darkCtx.isDarkMode ? 'social-color-dark' : 'social-color-light';

    return (
        <a href={props.link} className={`${classes.card} ${socialColor}`}>
                {props.children}
        </a>
    );
};

export default ButtonCard;