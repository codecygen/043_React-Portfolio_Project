import React from 'react';

import Divider from '../ui/Divider';

import TechCards from '../ui/TechCards';

import classes from './Tech.module.css';

const Tech = () => {

    return (
        <section className={classes.tech}>
            <h2>Technologies</h2>
            <TechCards />
            <Divider />
        </section>
    );
};

export default Tech;