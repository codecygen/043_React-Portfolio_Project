import React from 'react';
import classes from './Divider.module.css';

const Divider = () => {
    return (
        <div className={classes["h-divider"]}>
            <div className={classes.shadow}></div>
        </div>
    );
};

export default Divider;
