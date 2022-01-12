import React from 'react';
import classes from './NavButton.module.css';

// import { useContext } from 'react';
// import NavContext from '../../../store/nav-context';

const MenuButton = props => {
    // const navCtx = useContext(NavContext);

    // console.log(navCtx.test);


    return (
        <a href={props.hyperlink} className={classes.a}>
            {props.menuButtonName}
        </a>
    );
};

export default MenuButton;