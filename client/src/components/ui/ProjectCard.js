import React, { useContext } from 'react';
import classes from './ProjectCard.module.css';

import Button from '../ui/buttons/Button';

import DarkModeContext from '../../store/color-context';

const ProjectCard = (props) => {

    const darkCtx = useContext(DarkModeContext);

    const projectCard = darkCtx.isDarkMode ? `${classes['project-card']} project-card-color-dark` : `${classes['project-card']} project-card-color-light`;

    return (
        <div className={projectCard}>
            <div className={classes['image-box']}>
                <img src={props.img} alt="No Display" style={{height: `${props.height}`, width: `${props.width}`}} />
            </div>
            <h4>{props.text}</h4>
            {props.liveLink && <Button><a href={props.liveLink}>Live</a></Button>}
            {props.githubLink && <Button><a href={props.githubLink}>Github</a></Button>}
        </div>
    );
};

ProjectCard.defaultProps = {
    liveLink: false
}

export default ProjectCard;
