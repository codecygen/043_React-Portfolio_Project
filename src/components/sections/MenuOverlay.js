import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MenuOverlay.module.css';


const MenuOverlay = props => {

    const buttons = props.navButtons.map(eachObject => (
        <a 
            href={eachObject.link} 
            key={eachObject.key}
            className='menu-color'
        >
            {eachObject.name}
        </a>
    ));
    
    const portalElement = document.getElementById("overlays");

    return (
        <>
            {ReactDOM.createPortal(
                <div className={classes.box}>
                    {buttons}
                    <h4> Aras Sen ©{props.year}</h4>
                </div>
            , portalElement)}
        </>
    );
};

export default MenuOverlay;

