import React, { useContext } from "react";

import useVisitor from "./hooks/use-Visitor";

import MainPage from "./pages/MainPage";
import ErrorOrLoading from "./components/ui/ErrorOrLoading";

import DarkModeContext from "./store/color-context";

import "./App.css";

function App() {
  const isAllowed = useVisitor();

  const darkCtx = useContext(DarkModeContext);
  const bodyColor = darkCtx.isDarkMode ? "body-color-dark" : "body-color-light";

  const currentYear = new Date().getFullYear();

  let finalContent;

  if (isAllowed === null) {
    finalContent = <ErrorOrLoading isErrorPage={false} />
  } else if (!isAllowed) {
    finalContent = <ErrorOrLoading />
  } else {
    finalContent = <MainPage bodyColor={bodyColor} year={currentYear} />
  }

  return <>{finalContent}</>;
}

export default App;
