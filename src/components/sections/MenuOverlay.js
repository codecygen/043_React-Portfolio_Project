import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MenuOverlay.module.css';


const MenuOverlay = props => {

    let menuClasses = `${classes.box} menu-color ${classes.menu}`;

    if (props.clickState) {
        menuClasses = `${classes.box} menu-color ${classes.menu} ${classes['menu-active']}`
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
                    <h5> Aras Sen ©{props.year}</h5>
                </div>
            , portalElement)}
        </>
    );
};

export default MenuOverlay;

