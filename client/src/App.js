import React, { useContext } from "react";

import useVisitor from "./hooks/use-Visitor";

import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";
import ErrorPage from "./pages/ErrorPage";

import DarkModeContext from "./store/color-context";

import "./App.css";

function App() {
  const isAllowed = useVisitor();

  const darkCtx = useContext(DarkModeContext);
  const bodyColor = darkCtx.isDarkMode ? "body-color-dark" : "body-color-light";

  const currentYear = new Date().getFullYear();

  let finalContent;

  if (isAllowed === null) {
    finalContent = <LoadingPage bodyColor={bodyColor} />
  } else if (!isAllowed) {
    finalContent = <ErrorPage bodyColor={bodyColor} />
  } else {
    finalContent = <MainPage bodyColor={bodyColor} year={currentYear} />
  }

  return <>{finalContent}</>;
}

export default App;
