import React, { useState, useRef } from 'react';

import ProjectCard from '../ui/ProjectCard';
import Divider from '../ui/Divider';

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import classes from './Projects.module.css'

const Projects = () => {
    const [expandState, setExpandState] = useState(false);

    const heightRef = useRef();

    if (heightRef.current) {
        console.log(heightRef.current.scrollHeight);
    }

    const handleExpand = () => {
        setExpandState(prevValue => !prevValue);
    }

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
        },

        {
            id: 'a6',
            text: 'This is the project 5.',
            liveLink: 'https://www.yahoo.ca/',
            githubLink: 'https://twitter.com/'
        }
    ];

    const projectListLength = projectList.length;

    let totalIndex;

    if (!expandState) {
        totalIndex = 2;
    } else if (expandState) {
        totalIndex = projectListLength;
    }

    const filteredProjectList = projectList.filter((element, index) => index < totalIndex)

    const projectCards = filteredProjectList.map(element => (
        <ProjectCard
            key={element.id}
            text={element.text}
            liveLink={element.liveLink}
            githubLink={element.githubLink}
        />
    ));

    const expandContractArrow = (
        expandState ?
            <>
                <h4>Contract</h4>
                <TiArrowSortedUp className={classes['contract-arrow']} />
            </> :
            <>
                <h4>Expand</h4>
                <TiArrowSortedDown className={classes['expand-arrow']} />
            </>
    );

    return (
        <section className={classes.projects} id='projects'>
            <h2>Projects</h2>
            <div 
                className={classes['project-cards']} 
                ref={heightRef} 
                style={expandState ? {height: `${heightRef.current.scrollHeight}px`} : {height: `50px`}}>
                    {projectCards}
            </div>
            <Divider />
            <div className={classes.expand} onClick={handleExpand}>
                {projectListLength > 2 && expandContractArrow}
            </div>
        </section>
    );
};

export default Projects;
