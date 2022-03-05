import React, { useState, useRef, useEffect } from 'react';

import ProjectCard from '../ui/ProjectCard';
import Divider from '../ui/Divider';

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import classes from './Projects.module.css'

const Projects = () => {
    const [expandState, setExpandState] = useState(false);

    // Dynamic height change
    const heightRef = useRef();

    // Dynamic height change
    const [height, setHeight] = useState();

    // Dynamic height change
    const getHeight = () => {
        const newHeight = heightRef.current.clientHeight;
        console.log(newHeight);
        setHeight(newHeight);
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

    // Dynamic height change
    useEffect(() => {
        getHeight();
    }, [expandState]);

    return (
        <section className={classes.projects} id='projects'>
            <h2>Projects</h2>
            <div
                className={expandState ? classes['project-cards-expanded'] : classes['project-cards']}
                ref={heightRef}
                // style={{ height: `${height}px`, transition: 'height ease 0.25s' }}
            >
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
