import React from 'react';

import Divider from '../UI/Divider';
import Card from '../UI/Card';

import { GrHtml5 } from "react-icons/gr";

import classes from './Tech.module.css';

const Tech = () => {
    const techButtons = [
        {
            key: 1,
            icon: <GrHtml5 style={{height: "3rem", color: "red"}} />
        },
    ]

    return (
        <section className={classes.tech}>
            <h2>Technologies</h2>
            <Card>{techButtons[0].icon}</Card>
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