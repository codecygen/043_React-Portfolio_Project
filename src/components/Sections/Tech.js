import React from 'react';

import Divider from '../UI/Divider';
import Card from '../UI/Card';

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { ImGithub } from "react-icons/im";
import { SiHeroku } from "react-icons/si";
import { SiFirebase } from "react-icons/si";



import classes from './Tech.module.css';

const Tech = () => {
    const techButtons = [
        {
            key: 1,
            icon: <FaHtml5 size="100%" style={{color: '#e44d26', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>HTML5</p>
        },
        {
            key: 2,
            icon: <IoLogoCss3 size="100%" style={{color: '#254bdd', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>CSS3</p>
        },
        {
            key: 3,
            icon: <SiJavascript size="100%" style={{color: '#f7df1e', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>Javascript</p>
        },

        {
            key: 4,
            icon: <FaReact size="100%" style={{color: '#5ed3f3', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>React</p>
        },

        {
            key: 5,
            icon: <FaBootstrap size="100%" style={{color: '#7910f2', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>Bootstrap</p>
        },

        {
            key: 6,
            icon: <SiJquery size="100%" style={{color: '#0769ad', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>jQuery</p>
        },

        {
            key: 7,
            icon: <FaNode size="100%" style={{color: '#6da55f', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>Node.js</p>
        },

        {
            key: 8,
            icon: <DiMongodb size="100%" style={{color: '#429543', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>MongoDB</p>
        },

        {
            key: 9,
            icon: <ImGithub size="100%" style={{color: '#a1a1a1', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>GitHub</p>
        },

        {
            key: 10,
            icon: <SiHeroku size="100%" style={{color: '#875dc7', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>Heroku</p>
        },
        
        {
            key: 11,
            icon: <SiFirebase size="100%" style={{color: '#ffcb2b', height: '50%'}} />,
            name: <p className={classes['tech-icons-p']}>Firebase</p>
        },
    ]

    return (
        <section className={classes.tech}>
            <h2>Technologies</h2>
            <Card>
                {techButtons[0].icon}
                {techButtons[0].name}
            </Card>
            <Card>
                {techButtons[1].icon}
                {techButtons[1].name}
            </Card>
            <Card>
                {techButtons[2].icon}
                {techButtons[2].name}
            </Card>
            <Card>
                {techButtons[3].icon}
                {techButtons[3].name}
            </Card>
            <Card>
                {techButtons[4].icon}
                {techButtons[4].name}
            </Card>
            <Card>
                {techButtons[5].icon}
                {techButtons[5].name}
            </Card>
            <Card>
                {techButtons[6].icon}
                {techButtons[6].name}
            </Card>
            <Card>
                {techButtons[7].icon}
                {techButtons[7].name}
            </Card>
            <Card>
                {techButtons[8].icon}
                {techButtons[8].name}
            </Card>
            <Card>
                {techButtons[9].icon}
                {techButtons[9].name}
            </Card>
            <Card>
                {techButtons[10].icon}
                {techButtons[10].name}
            </Card>
            <Divider />
        </section>
    );
};

export default Tech;