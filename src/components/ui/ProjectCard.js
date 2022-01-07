import React from 'react';
import classes from './ProjectCard.module.css';

import Button from '../ui/buttons/Button';

const ProjectCard = () => {
    return (
        <div className={`${classes['project-card']} project-card-color`}>
            <p>This is ProjectCard.</p>
            <Button>View Live</Button>
            <Button>GitHub</Button>
        </div>
    );
};

export default ProjectCard;
