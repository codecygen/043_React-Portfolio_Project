import React, { useContext } from "react";

import useVisitor from "./hooks/use-Visitor";

import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";

import DarkModeContext from "./store/color-context";

import "./App.css";

function App() {
  const isInBanList = useVisitor();

  const darkCtx = useContext(DarkModeContext);
  const bodyColor = darkCtx.isDarkMode ? "body-color-dark" : "body-color-light";

  const finalContent =
    isInBanList === false ? (
      <MainPage bodyColor={bodyColor} />
    ) : (
      <LoadingPage />
    );

  return <>{finalContent}</>;
}

export default App;
