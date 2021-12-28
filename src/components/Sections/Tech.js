import React from 'react';

import Divider from '../UI/Divider';

import techCards from '../assets/tech-icons/tech-cards';

import classes from './Tech.module.css';

const Tech = () => {

    return (
        <section className={classes.tech}>
            <h2>Technologies</h2>
            {techCards}
            <Divider />
        </section>
    );
};

export default Tech;