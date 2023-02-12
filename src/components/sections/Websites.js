import React, { useState, useRef, useEffect } from 'react';

import ProjectCard from '../ui/ProjectCard';
import Divider from '../ui/Divider';

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import useWindowSize from '../../hooks/use-windowSize';

import blogImg from '../../assets/images/project-images/blogImg.png';
import armlinesImg from '../../assets/images/project-images/armlinesImg.png';
import codecygenImg from '../../assets/images/project-images/codecygenImg.png';
import arasmakinaImg from '../../assets/images/project-images/arasmakinaImg.png';

import classes from './Websites.module.css';

const Websites = () => {
    const windowSize = useWindowSize();

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
            id: 's0',
            img: blogImg,
            height: '100%',
            width: 'auto',
            text: 'Blog Website, 2023, Winter',
            liveLink: 'https://vercel-083-next-js-blog-website.vercel.app/'
        },

        {
            id: 's1',
            img: armlinesImg,
            height: '100%',
            width: 'auto',
            text: 'Furniture Store, 2021, Winter',
            liveLink: 'https://armlines.com/',
            githubLink: 'https://github.com/codecygen/armlines.com-public'
        },

        {
            id: 's2',
            img: codecygenImg,
            height: '100%',
            width: 'auto',
            text: 'Web Designer, 2021, Summer',
            liveLink: 'https://codecygen.com/',
            githubLink: 'https://github.com/codecygen/codecygen.com-public'
        },

        {
            id: 's3',
            img: arasmakinaImg,
            height: '100%',
            width: 'auto',
            text: 'Manufacturer, 2018, Winter',
            liveLink: 'https://arasmakina.com/',
            githubLink: 'https://github.com/codecygen/060_arasmakina.com'
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
            height={element.height} 
            width={element.width} 
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
    }, [expandState, windowSize.width]);

    return (
        <section className={classes.projects} id='projects'>
            <h2>{projectList.length} Websites Built</h2>

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

export default Websites;
