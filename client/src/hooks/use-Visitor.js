import { useEffect, useState } from "react";
import checkIP from "../utils/checkIP";

const useVisitor = () => {
  const [isOKtoVisit, setIsOKtoVisit] = useState(null);

  useEffect(() => {
    const postAndGetData = async () => {
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
        return data.isAllowed;
      } catch (e) {
        console.error(e);
        return false;
      }
    };
    
    postAndGetData().then(res => {setIsOKtoVisit(res)});
  }, []);

  return isOKtoVisit;
};

export default useVisitor;
