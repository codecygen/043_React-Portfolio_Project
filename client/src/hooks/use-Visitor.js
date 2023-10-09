import { useEffect, useState } from "react";
import checkIP from "../utils/checkIP";

const useVisitor = () => {
  const [isOKtoVisit, setIsOKtoVisit] = useState(null);

  useEffect(() => {
    const postAndGetData = async () => {
      const localStorageVisitorData = JSON.parse(localStorage.getItem("visitorData"));
      let isThreeMinPassed = false;

      if (localStorageVisitorData) {
        // Check if 3 min passed since the last timeStamp of locally saved
        // visitorData
        isThreeMinPassed =
          Date.now() - localStorageVisitorData.timeStamp > 180000
            ? true
            : false;
      }

      // Only send request to backend if localstorage is not set
      // or if 3 minutes passed since the last saved data.
      if (isThreeMinPassed || localStorageVisitorData === null) {
        const ip = await checkIP();

        // POST DATA TO BACKEND
        try {
          const res = await fetch(`${process.env.REACT_APP_BACKEND}/visitor`, {
            method: "POST",
            body: JSON.stringify({
              IP: ip,
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });

          if (!res.ok) {
            console.error("Something went awry!");
            return false;
          }

          const data = await res.json();

          // Set data to local storage
          localStorage.setItem(
            "visitorData",
            JSON.stringify({ isAllowed: data.isAllowed, timeStamp: Date.now() })
          );

          return data.isAllowed;
        } catch (e) {
          console.error(e);
          return false;
        }
      }

      // This will return local storage result if visitorData already
      // put inside the local storage. So it will not connect server in every
      // page request to see if the person is allowed to visit your page.
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const localStorageVisitorData = JSON.parse(
            localStorage.getItem("visitorData")
          );

          resolve(localStorageVisitorData.isAllowed);
        }, 500);
      });
    };

    postAndGetData().then((res) => {
      setIsOKtoVisit(res);
    });
  }, []);

  return isOKtoVisit;
};

export default useVisitor;
