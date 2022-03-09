import React, { useState, useRef, useEffect } from 'react';

import ProjectCard from '../ui/ProjectCard';
import Divider from '../ui/Divider';

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import classes from './Projects.module.css';

import armlines from '../../assets/images/project-images/armlines.png';

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
            img: armlines,
            text: 'Name List App, 2021, Autumn',
            liveLink: 'https://react-namelist.firebaseapp.com/',
            githubLink: 'https://github.com/codecygen/038_React-Project-Name_List'
        },

        {
            id: 'a2',
            img: '../../assets/images/project-images/armlines.png',
            text: 'codecygen.com, 2021, Summer',
            liveLink: 'https://codecygen.com/',
            githubLink: 'https://github.com/codecygen/codecygen.com-public'
        },

        {
            id: 'a3',
            img: '../../assets/images/project-images/armlines.png',
            text: 'armlines.com, 2021, Winter',
            liveLink: 'https://armlines.com/',
            githubLink: 'https://github.com/codecygen/armlines.com-public'
        },

        {
            id: 'a4',
            img: '../../assets/images/project-images/armlines.png',
            text: 'Simon Game, 2021, Summer',
            liveLink: 'https://simongamejavascript.web.app/',
            githubLink: 'https://github.com/codecygen/056_Simon-Game'
        },

        {
            id: 'a5',
            img: '../../assets/images/project-images/armlines.png',
            text: 'Dice Game, 2021, Summer',
            liveLink: 'https://mydicerollgame.web.app/',
            githubLink: 'https://github.com/codecygen/057_Dice-Game'
        },

        {
            id: 'a6',
            img: '../../assets/images/project-images/armlines.png',
            text: 'arasmakina.com, 2017, Winter',
            liveLink: 'https://arasmakina.com/',
            githubLink: 'https://github.com/codecygen/060_arasmakina.com'
        },

        {
            id: 'a7',
            img: '../../assets/images/project-images/armlines.png',
            text: 'Weather App, 2021, Summer',
            liveLink: 'https://floating-escarpment-18099.herokuapp.com/',
            githubLink: 'https://github.com/codecygen/059_Weather-Project'
        },

        {
            id: 'a8',
            img: '../../assets/images/project-images/armlines.png',
            text: 'OAUTH2.0  And Standard Login , 2021, Winter',
            githubLink: 'https://github.com/codecygen/032_OAUTH2.0-Social-Media-Login_Level6'
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
            img={element.img} 
            text={element.text} 
            liveLink={element.liveLink} 
            githubLink={element.githubLink} 
        />
    ));

    const expandContractArrow = (
        expandState ?
            <>
                <h4>Collapse</h4>
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
