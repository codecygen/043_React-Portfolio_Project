import React, { useContext } from 'react';
import classes from './ProjectCard.module.css';

import Button from '../ui/buttons/Button';

import DarkModeContext from '../../store/color-context';

const ProjectCard = () => {
    const darkCtx = useContext(DarkModeContext);

    const projectCardColor = darkCtx.isDarkMode ? `${classes['project-card']} project-card-color-dark` : `${classes['project-card']} project-card-color-light`;

    return (
        <div className={projectCardColor}>
            <h4>This is Project</h4>
            <Button>Live</Button>
            <Button>GitHub</Button>
        </div>
    );
};

export default ProjectCard;
