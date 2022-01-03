import React from 'react';

import NavBar from './components/sections/NavBar';
import Home from './components/sections/Home';
import Tech from './components/sections/Tech';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Tech />
      <Footer />
    </>
  );
}

export default App;
