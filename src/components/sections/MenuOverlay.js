import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MenuOverlay.module.css';


const MenuOverlay = props => {

    let menuClasses = `${classes.box} ${classes.menu} menu-color`;

    if (props.clickState) {
        menuClasses = `${classes.box} ${classes.menu} menu-color ${classes['menu-active']}`
    }

    const buttons = props.navButtons.map(eachObject => (
        <a 
            href={eachObject.link} 
            key={eachObject.key}
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
                    <h4> Aras Sen ©{props.year}</h4>
                </div>
            , portalElement)}
        </>
    );
};

export default MenuOverlay;

