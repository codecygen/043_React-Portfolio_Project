import React, { useState, useRef, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import ProjectCard from "../ui/ProjectCard";
import Divider from "../ui/Divider";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import useWindowSize from "../../hooks/use-windowSize";

import classes from "./Projects.module.css";

import simon from "../../assets/images/project-images/simon.png";
import dice from "../../assets/images/project-images/dice.png";
import solar from "../../assets/images/project-images/solar.png";
import ecommerce from "../../assets/images/project-images/ecommerce.png";

const Projects = () => {
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
  };

  const handleExpand = () => {
    setExpandState((prevValue) => !prevValue);
  };

  let projectList = [
    {
      img: ecommerce,
      text: "E-commerce Cart, 2022, Spring",
      liveLink: "https://food-order-app-database-fa642.web.app/",
      githubLink: "https://github.com/codecygen/064-React-Redux-TailwindCSS",
    },

    {
      img: solar,
      text: "Solar System, 2022, Spring",
      liveLink: "https://sun-orbit-project.web.app",
      githubLink:
        "https://github.com/codecygen/065-Solar-System-Animation-HMTL-CSS-Javascript",
    },

    {
      img: simon,
      text: "Simon Game, 2021, Summer",
      liveLink: "https://simongamejavascript.web.app/",
      githubLink: "https://github.com/codecygen/056_Simon-Game",
    },

    {
      img: dice,
      text: "Dice Game, 2021, Summer",
      liveLink: "https://mydicerollgame.web.app/",
      githubLink: "https://github.com/codecygen/057_Dice-Game",
    },
  ];

  projectList = projectList.map((project) => {
    return { ...project, id: uuidv4(), height: "100%", width: "auto" };
  });

  const projectListLength = projectList.length;

  let totalIndex;

  if (!expandState) {
    totalIndex = 2;
  } else if (expandState) {
    totalIndex = projectListLength;
  }

  const filteredProjectList = projectList.filter(
    (element, index) => index < totalIndex
  );

  const projectCards = filteredProjectList.map((element) => (
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

  const expandContractArrow = expandState ? (
    <>
      <h4>Collapse</h4>
      <TiArrowSortedUp className={classes["contract-arrow"]} />
    </>
  ) : (
    <>
      <h4>Expand</h4>
      <TiArrowSortedDown className={classes["expand-arrow"]} />
    </>
  );

  // Dynamic height change
  useEffect(() => {
    getHeight();
  }, [expandState, windowSize.width]);

  return (
    <section className={classes.projects} id="projects">
      <h2>{projectListLength} Sample Projects</h2>

      {/* This parent div is to make the animation happen! */}
      <div style={{ height: `${height}px`, transition: "height ease 0.25s" }}>
        <div className={classes["project-cards"]} ref={heightRef}>
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
