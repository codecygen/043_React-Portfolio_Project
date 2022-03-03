import React, { useState } from 'react';

import ProjectCard from '../ui/ProjectCard';
import Divider from '../ui/Divider';

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import classes from './Projects.module.css'

const Projects = () => {
    const [expandState, setExpandState] = useState(false);

    const handleExpand = () => {
        setExpandState(prevValue => !prevValue);
    }

    console.log(expandState);

    const projectList = [
        {
            id: 'a1',
            text: 'This is the project 1.',
            liveLink: 'https://www.google.ca/',
            githubLink: 'https://github.com/'
        },

        {
            id: 'a2',
            text: 'This is the project 2.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        },

        {
            id: 'a3',
            text: 'This is the project 3.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        },

        {
            id: 'a4',
            text: 'This is the project 4.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        },

        {
            id: 'a5',
            text: 'This is the project 5.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        }
    ];

    let totalIndex;

    if (!expandState) {
        totalIndex = projectList.length;
    }

    const filteredProjectList = projectList.filter((element, index) => index < projectList.length)

    const projectCards = filteredProjectList.map(element => (
        <ProjectCard
            key={element.id}
            text={element.text}
            liveLink={element.liveLink}
            githubLink={element.githubLink}
        />
    ));

    return (
        <section className={classes.projects} id='projects'>
            <h2>Projects</h2>
            <div className={classes['project-cards']}>
                {projectCards}
            </div>
            <Divider />
            <div className={classes.expand} onClick={handleExpand}>
                <h4>Expand</h4>
                <TiArrowSortedDown className={classes['expand-arrow']} />
            </div>
        </section>
    );
};

export default Projects;
