import React, { useContext } from 'react';
import classes from './ProjectCard.module.css';

import Button from '../ui/buttons/Button';

import DarkModeContext from '../../store/color-context';

const ProjectCard = props => {
    const darkCtx = useContext(DarkModeContext);

    const projectCardColor = darkCtx.isDarkMode ? `${classes['project-card']} project-card-color-dark` : `${classes['project-card']} project-card-color-light`;

    return (
        <div className={projectCardColor}>
            <h4>{props.text}</h4>
            <Button><a href={props.liveLink}>Live</a></Button>
            <Button><a href={props.githubLink}>Github</a></Button>
        </div>
    );
};

export default ProjectCard;
