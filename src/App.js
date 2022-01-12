import React from 'react';

import NavBar from './components/sections/NavBar';
import Home from './components/sections/Home';
import Tech from './components/sections/Tech';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <NavBar 
        year={currentYear} />
      <Home id='#home' />
      <Tech id='#tools' />
      <Projects id='#projects' />
      <Contact id='#contact' />
      <Footer year={currentYear} />
    </>
  );
}

export default App;
