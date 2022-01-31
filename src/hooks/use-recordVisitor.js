import {useEffect} from 'react';

const useRecordVisitor = () => {

    useEffect(() => {
        const visitorDatabase = async () => {
          const resIP = await fetch('https://www.myexternalip.com/json');
          const dataIP = await resIP.json();
    
          const resGeoInfo = await fetch(`https://ipwhois.app/json/${dataIP.ip}`);
          const dataGeoInfo = await resGeoInfo.json();
    
          const visitorTime = new Date().toLocaleTimeString();
    
          const visitorInfo = {
            location: `${dataGeoInfo.city}/${dataGeoInfo.country}`,
            coordinate: `${dataGeoInfo.latitude} ${dataGeoInfo.longitude}`,
            ip: `${dataGeoInfo.ip}`,
            time: visitorTime
          };
    
          const yearMonth = new Date().toLocaleDateString('EN-CA').slice(0, 7);
          const day = new Date().getDate();
    
          const databaseFetchLink = `https://portfolio-email-sending-default-rtdb.firebaseio.com/visitors/${yearMonth}/day-${day}.json`;
    
          const res = await fetch(databaseFetchLink,
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
    
        visitorDatabase();
      
      }, []);
};

export default useRecordVisitor;
