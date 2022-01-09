import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MenuOverlay.module.css';


const MenuOverlay = props => {

    let menuClasses = `${classes.box} menu-color`;

    if (props.menuState) {
        menuClasses = `${classes.box} ${classes['box-opened']} menu-color`;
    };

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

