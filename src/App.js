import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Sections/Home';
import Tech from './components/Sections/Tech';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Tech />
    </>
  );
}

export default App;
