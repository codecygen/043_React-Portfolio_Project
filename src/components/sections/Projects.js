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
        setHeight(newHeight);
    }

    const handleExpand = () => {
        setExpandState(prevValue => !prevValue);
    }

    const projectList = [
        {
            id: 'a1',
            text: 'Name list app made in React. You can add and remove users to the list.',
            liveLink: 'https://react-namelist.firebaseapp.com/',
            githubLink: 'https://github.com/codecygen/038_React-Project-Name_List'
        },

        {
            id: 'a2',
            text: 'codecygen.com, first website I have ever made.',
            liveLink: 'https://codecygen.com/',
            githubLink: 'https://github.com/codecygen/codecygen.com-public'
        },

        {
            id: 'a3',
            text: 'armlines.com',
            liveLink: 'https://armlines.com/',
            githubLink: 'https://github.com/codecygen/armlines.com-public'
        },

        {
            id: 'a4',
            text: 'Simon Game',
            liveLink: 'https://simongamejavascript.web.app/',
            githubLink: 'https://github.com/codecygen/056_Simon-Game'
        },

        {
            id: 'a5',
            text: 'Dice Game',
            liveLink: 'https://mydicerollgame.web.app/',
            githubLink: 'https://github.com/codecygen/057_Dice-Game'
        },

        {
            id: 'a6',
            text: 'arasmakina.com, 2017',
            liveLink: 'https://arasmakina.com/',
            githubLink: 'https://github.com/codecygen/057_Dice-Game'
        },

        {
            id: 'a7',
            text: 'weather app, 2021, Summer',
            liveLink: 'https://floating-escarpment-18099.herokuapp.com/',
            githubLink: 'https://github.com/codecygen/059_Weather-Project'
        },

        
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

            {/* This parent div is to make the animation happen! */}
            <div
                style={{ height: `${height}px`, transition: 'height ease 0.25s' }}
            >
                <div
                    className={classes['project-cards']}
                    ref={heightRef}
                >
                    {projectCards}
                </div>
            </div>

            <Divider />

            <div className={classes.expand} onClick={handleExpand}>
                {projectListLength > 2 && expandContractArrow}
            </div>
        </section>
    );
};

export default Projects;
