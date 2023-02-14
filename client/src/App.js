import React, { useContext } from 'react';

import useFetch from './hooks/use-fetch';

import NavBar from './components/sections/NavBar';
import Home from './components/sections/Home';
import Tech from './components/sections/Tech';
import Websites from './components/sections/Websites'
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

import DarkModeContext from './store/color-context';

import './App.css';

function App() {
  const backendData = useFetch();

  const darkCtx = useContext(DarkModeContext);

  const bodyColor = darkCtx.isDarkMode ? 'body-color-dark' : 'body-color-light';

  const currentYear = new Date().getFullYear();

  return (
    <div className={bodyColor}>
      <NavBar
        year={currentYear}
      />
      <Home />
      <Tech />
      <Websites />
      <Projects />
      <Contact />
      <Footer year={currentYear} />
    </div>
  );
}

export default App;
