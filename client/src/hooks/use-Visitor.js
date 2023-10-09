import { useEffect, useState } from "react";
import checkIP from "../utils/checkIP";

const useVisitor = () => {
  const [isOKtoVisit, setIsOKtoVisit] = useState(null);

  useEffect(() => {
    const postAndGetData = async () => {
      // Only send request to backend if localstorage is not set
      if (localStorage.getItem("isOKtoVisit") === null) {
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
          localStorage.setItem("isOKtoVisit", JSON.stringify(data.isAllowed));

          return data.isAllowed;
        } catch (e) {
          console.error(e);
          return false;
        }
      }

      // This will return local storage result if isOKtoVisit already
      // put inside the local storage. So it will not connect server in every
      // page request to see if the person is allowed to visit your page.
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem("isOKtoVisit")));
        }, 500);
      });
    };

    // Only run the backend check if data is not set
    // if (localStorage.getItem("isOKtoVisit") === null) {
    postAndGetData().then((res) => {
      setIsOKtoVisit(res);
    });
  }, []);

  return isOKtoVisit;
};

export default useVisitor;
