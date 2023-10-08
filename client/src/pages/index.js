import React, { useContext } from "react";

import useVisitor from "../hooks/use-Visitor";

import NavBar from "../components/sections/NavBar";
import Home from "../components/sections/Home";
import Tech from "../components/sections/Tech";
import Websites from "../components/sections/Websites";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

import ErrorOrLoading from "../components/ui/ErrorOrLoading";
import DarkModeContext from "../store/color-context";

const Index = (props) => {
  const darkCtx = useContext(DarkModeContext);
  const bodyColor = darkCtx.isDarkMode ? "body-color-dark" : "body-color-light";

  const isAllowed = useVisitor();
  const currentYear = new Date().getFullYear();

  let IndexPageContent;

  if (isAllowed === null) {
    IndexPageContent = <ErrorOrLoading isErrorPage={false} />
  } else if (!isAllowed) {
    IndexPageContent = <ErrorOrLoading />
  } else {
    IndexPageContent = (
      <div className={bodyColor}>
        <NavBar year={currentYear} />
        <Home />
        <Tech />
        <Websites />
        <Projects />
        <Contact />
        <Footer year={props.year} />
      </div>
    )
  }

  return (IndexPageContent);
};

export default Index;