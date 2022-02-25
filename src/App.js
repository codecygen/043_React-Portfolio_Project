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

  const bodyColor = darkCtx.isDarkMode ? 'body-color-dark' : 'body-color-light';

  const currentYear = new Date().getFullYear();






  const [visitorInfo, setVisitorInfo] = useState({});

  const fetchData = async () => {
    // const response = await fetch('https://www.myexternalip.com/json');
    // const data = await response.json();

    // const resGeo = await fetch(`https://ipwhois.app/json/${data.ip}`);
    // const dataGeo = await resGeo.json();

    // const date = new Date().toLocaleString('EN-CA', { timeZone: 'America/New_York' });

    // setVisitorInfo(prevValue => {
    //   return {
    //     ...prevValue,
    //     ip: data.ip,
    //     country: dataGeo.country,
    //     date: date
    //   };
    // });

    setVisitorInfo(prevValue => {
      return {
        country: 'Canada',
        date: '2022-02-25, 12:37:49 a.m.',
        ip: "72.140.52.253"
      };
    });
  }

  const [localStorageTime, setLocalStorageTime] = useState(localStorage.getItem('localTime'));


  const [timeInterval, setTimeInterval] = useState(1000);
  const [fetchCount, setFetchCount] = useState(localStorage.getItem('localCount'));

  useEffect(() => {

    const interval = setInterval(() => {

      setLocalStorageTime(localStorage.getItem('localTime'));

      if (new Date().getTime() - localStorageTime > timeInterval) {
        localStorage.setItem('localTime', new Date().getTime());
        setLocalStorageTime(localStorage.getItem('localTime'));

        if (!fetchCount) {
          fetchData();
          setFetchCount(prevCount => prevCount + 1);
          localStorage.setItem('localCount', 1);
        } else if (fetchCount === 1) {
          fetchData();
          setFetchCount(prevCount => prevCount + 1);
          setTimeInterval(5000);
          localStorage.setItem('localCount', 2);
          console.log(visitorInfo);
        } else if (localStorage.getItem('localCount') === 2) {
          fetchData();
          console.log(visitorInfo);
          console.log('hi');
        }
      }
    }, timeInterval);

    return () => clearInterval(interval);
  });

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
