import React from 'react';

import NavBar from './components/sections/NavBar';
import Home from './components/sections/Home';
import Tech from './components/sections/Tech';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
