import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MenuOverlay.module.css';


const MenuOverlay = () => {
    const portalElement = document.getElementById("overlays");

    return (
        <>
            {ReactDOM.createPortal(<p className={classes.box}>Testadasdasdasdadsa</p>, portalElement)}
        </>
    );
};

export default MenuOverlay;

