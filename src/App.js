import React, { useContext, useEffect } from 'react';

import useRecordVisitor from './hooks/use-recordVisitor';

import NavBar from './components/sections/NavBar';
import Home from './components/sections/Home';
import Tech from './components/sections/Tech';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

import DarkModeContext from './store/color-context';
import './App.css';

function App() {
  const darkCtx = useContext(DarkModeContext);

  const bodyColor = darkCtx.isDarkMode ? 'body-color-dark' : 'body-color-light';

  const currentYear = new Date().getFullYear();

  useRecordVisitor();

  // React-To-Node-Connection
  // Don't forget to edit "package.json" file and put
  // "proxy": "http://localhost:8000"
  useEffect(() => {
    const getBackend = async () => {
      const res = await fetch('/backend-to-frontend');
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Cannot get data from backend server. HTTP Status: ${res.status}`);
      }
  
      console.log(data.message);
    }
  
    getBackend();

    const postBackend = async () => {
    
      const res = await fetch('/frontend-to-backend',
        {
          method: 'post',
          body: JSON.stringify({test: 'Hi from frontend!'}),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (!res.ok) {
        throw new Error(`Cannot send data to backend server. HTTP Status: ${res.status}`);
      }
    }

    postBackend();

  }, []);
  

  return (
    <div className={bodyColor}>
      <NavBar
        year={currentYear}
      />
      <Home />
      <Tech />
      <Projects />
      <Contact />
      <Footer year={currentYear} />
    </div>
  );
}

export default App;
