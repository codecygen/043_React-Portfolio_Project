import React, { useContext, useEffect } from 'react';

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

  useEffect(() => {
    const getIP = async () => {
      const resIP = await fetch('https://www.myexternalip.com/json')
      const data = await resIP.json();

      const visitorInfo = {
        '1_IP': data.ip
      }

      const yearMonth = new Date().toLocaleDateString('EN-CA').slice(0, 7);
      const day = new Date().getDate();

      const fetchLink = `https://portfolio-email-sending-default-rtdb.firebaseio.com/visitors/${yearMonth}/day-${day}.json`;

      const res = await fetch(fetchLink,
        {
          method: 'post',
          body: JSON.stringify(visitorInfo),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (!res.ok) {
        throw new Error(`Something went wrong! HTTP Status: ${res.status}`);
      }
    }

    getIP();
  
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
