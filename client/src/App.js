import React, { useContext } from "react";

import useVisitor from "./hooks/use-Visitor";

import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";

import DarkModeContext from "./store/color-context";

import "./App.css";

function App() {
  const isAllowed = useVisitor();

  const darkCtx = useContext(DarkModeContext);
  const bodyColor = darkCtx.isDarkMode ? "body-color-dark" : "body-color-light";

  const currentYear = new Date().getFullYear();

  const finalContent =
    isAllowed === true ? (
      <MainPage bodyColor={bodyColor} year={currentYear} />
    ) : (
      <LoadingPage bodyColor={bodyColor} />
    );

  return <>{finalContent}</>;
}

export default App;
