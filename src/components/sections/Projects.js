import React from 'react';

import ProjectCard from '../ui/ProjectCard';
import Divider from '../ui/Divider';

import classes from './Projects.module.css'

const Projects = () => {
    return (
        <section className={classes.projects}>
            <h2>Projects</h2>

            <ProjectCard />

            <Divider />
        </section>
    );
};

export default Projects;
