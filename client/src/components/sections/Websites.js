import React, { useState, useRef, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import ProjectCard from "../ui/ProjectCard";
import Divider from "../ui/Divider";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import useWindowSize from "../../hooks/use-windowSize";

import blogImg from "../../assets/images/project-images/blogImg.png";
import portfolioImg from "../../assets/images/project-images/portfolioImg.png";
import armlinesImg from "../../assets/images/project-images/armlinesImg.png";
import codecygenImg from "../../assets/images/project-images/codecygenImg.png";
import arasmakinaImg from "../../assets/images/project-images/arasmakinaImg.png";

import classes from "./Websites.module.css";

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
  };

  const handleExpand = () => {
    setExpandState((prevValue) => !prevValue);
  };

  // When Contract button is clicked, scroll back to the
  // beginning of the "websites" id.
  const scrollToWebsitesId = () => {
    setTimeout(() => {
      document.getElementById("websites").scrollIntoView();
    }, 300);
  };

  let projectList = [
    {
      img: blogImg,
      text: "Blog Website, 2023, Winter",
      liveLink: "https://vercel-083-next-js-blog-website.vercel.app/",
    },

    {
      img: portfolioImg,
      text: "My Portfolio , 2022, Spring",
      githubLink: "https://github.com/codecygen/043_React-Portfolio_Project",
    },

    {
      img: armlinesImg,
      text: "Furniture Store, 2021, Winter",
      liveLink: "https://armlines.com/",
      githubLink: "https://github.com/codecygen/armlines.com-public",
    },

    {
      img: codecygenImg,
      text: "Web Designer, 2021, Summer",
      liveLink: "https://codecygen.com/",
      githubLink: "https://github.com/codecygen/codecygen.com-public",
    },

    {
      img: arasmakinaImg,
      text: "Manufacturer, 2018, Winter",
      liveLink: "https://arasmakina.com/",
      githubLink: "https://github.com/codecygen/060_arasmakina.com",
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
      <h4 onClick={scrollToWebsitesId}>Collapse</h4>
      <div onClick={scrollToWebsitesId}>
        <TiArrowSortedUp className={classes["contract-arrow"]} />
      </div>
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
    <section className={classes.projects} id="websites">
      <h2>{projectListLength} Websites Built</h2>

      {/* This parent div is to make the animation happen! */}
      <div style={{ height: `${height}px`, transition: "height ease 0.25s" }}>
        <div className={classes["project-cards"]} ref={heightRef}>
          {projectCards}
        </div>
      </div>

      <Divider />

      <div className={classes.expand} onClick={handleExpand}>
        {expandContractArrow}
      </div>
    </section>
  );
};

export default Websites;
