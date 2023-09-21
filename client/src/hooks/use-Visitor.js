import { useEffect } from "react";
import checkIP from "../utils/checkIP";

const useVisitor = () => {
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
        }

        await res.json();
      } catch (e) {
        console.error(e);
      }

      // GET DATA FROM BACKEND
      // try {
      //   const res = await fetch(`${process.env.REACT_APP_BACKEND}/visitor`, {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //   });

      //   if (!res.ok) {
      //     console.error("Something went awry!");
      //   }

      //   const data = await res.json();
      //   console.log(data);
      // } catch (e) {
      //   console.error(e);
      // }
    };
    postAndGetData();
  }, []);
};

export default useVisitor;
