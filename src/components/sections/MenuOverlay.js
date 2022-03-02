import React, { useContext }  from 'react';
import ReactDOM from 'react-dom';
import classes from './MenuOverlay.module.css';

import DarkModeContext from '../../store/color-context';

const MenuOverlay = props => {

    const darkCtx = useContext(DarkModeContext);

    const menuColor = darkCtx.isDarkMode ? 'menu-color-dark' : 'menu-color-light';

    let menuClasses = `${classes.box} ${menuColor} ${classes.menu}`;

    if (props.clickState) {
        menuClasses = `${classes.box} ${menuColor} ${classes.menu} ${classes['menu-active']}`
    }

    const buttons = props.navButtons.map(eachObject => (
        <a 
            href={eachObject.link} 
            key={eachObject.key}
            className={classes.links}
            onClick={props.menuItemClickHandler}
        >
            {eachObject.name}
        </a>
    ));
    
    const portalElement = document.getElementById("overlays");

    return (
        <>
            {ReactDOM.createPortal(
                <div className={menuClasses}>
                    {buttons}
                    <h5 className={menuColor}> Aras Sen ©{props.year}</h5>
                </div>
            , portalElement)}
        </>
    );
};

export default MenuOverlay;

