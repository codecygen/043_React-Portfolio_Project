import React from 'react';
import classes from './ProjectCard.module.css';

const ProjectCard = () => {
    return (
        <div className={`${classes['project-card']} project-card-color`}>
            <p>This is ProjectCard.</p>
        </div>
    );
};

export default ProjectCard;
