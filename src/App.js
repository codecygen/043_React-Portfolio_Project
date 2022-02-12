import React, { useState, useContext, useEffect } from 'react';

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

  const [visitorInfo, setVisitorInfo] = useState({});

  const bodyColor = darkCtx.isDarkMode ? 'body-color-dark' : 'body-color-light';

  const currentYear = new Date().getFullYear();



  const localVisitTime = localStorage.getItem('localVisitTime');
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - localVisitTime;

  const [ visitTime, setVisitTime ] = useState(localVisitTime);

  if (localVisitTime && timeDifference <= 5000) {
    // Do nothing, wait!
  } else {
    localStorage.setItem('localVisitTime', new Date().getTime());
    setVisitTime(localVisitTime);
  }

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('https://www.myexternalip.com/json');
      const data = await response.json();

      const resGeo = await fetch(`https://ipwhois.app/json/${data.ip}`);
      const dataGeo = await resGeo.json();

      const date = new Date().toLocaleString('EN-CA', { timeZone: 'America/New_York' });

      setVisitorInfo(prevValue => {
        return {
          ...prevValue,
          ip: data.ip,
          country: dataGeo.country,
          date: date
        };
      });

      console.log('Data fetched!');
    }

    fetchData();
  }, [visitTime]);

  console.log(visitorInfo);

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
