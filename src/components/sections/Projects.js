import React from 'react';

import ProjectCard from '../ui/ProjectCard';
import Divider from '../ui/Divider';

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import classes from './Projects.module.css'

const Projects = () => {
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
            id: 'a2',
            text: 'This is the project 3.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        },

        {
            id: 'a2',
            text: 'This is the project 4.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        },

        {
            id: 'a2',
            text: 'This is the project 5.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        }
    ];

    const projectCardsAll = projectList.map(element => (
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
                {projectCardsAll}
            </div>
            <Divider />
            <div className={classes.expand}>
                <h4>Expand</h4>
                <TiArrowSortedDown className={classes['expand-arrow']} />
            </div>
        </section>
    );
};

export default Projects;
