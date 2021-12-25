import React from 'react';

import Divider from '../UI/Divider';
import Card from '../UI/Card';

import classes from './Tech.module.css';

const Tech = () => {
    return (
        <section className={classes.tech}>
            <h2>Technologies</h2>
            <Card>test</Card>
            <Card>test</Card>
            <Card>test</Card>
            <Card>test</Card>
            <Card>test</Card>
            <Card>test</Card>
            <Divider />
        </section>
    );
};

export default Tech;