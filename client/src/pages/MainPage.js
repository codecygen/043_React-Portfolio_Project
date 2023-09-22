import React from "react";

// import useVisitor from "../hooks/use-Visitor";

import NavBar from "../components/sections/NavBar";
import Home from "../components/sections/Home";
import Tech from "../components/sections/Tech";
import Websites from "../components/sections/Websites";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const AllSections = (props) => {

  // useVisitor();

  const currentYear = new Date().getFullYear();

  return (
    <div className={props.bodyColor}>
      <NavBar year={currentYear} />
      <Home />
      <Tech />
      <Websites />
      <Projects />
      <Contact />
      <Footer year={currentYear} />
    </div>
  );
};

export default AllSections;
