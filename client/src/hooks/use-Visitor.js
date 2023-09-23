import { useEffect, useState } from "react";
import checkIP from "../utils/checkIP";

const useVisitor = () => {
  const [isAllowed, setIsAllowed] = useState(null);

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
          return true;
        }

        const data = await res.json();
        return !data.isInBanList;
      } catch (e) {
        console.error(e);
        return true;
      }
    };
    
    postAndGetData().then(res => {setIsAllowed(res)});
  }, []);

  return isAllowed;
};

export default useVisitor;
