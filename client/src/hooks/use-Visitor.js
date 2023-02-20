import { useEffect } from "react";
import checkIP from "../utils/checkIP";

const useVisitor = () => {
  useEffect(() => {
    const postData = async () => {
      const ip = await checkIP();

      try {
        const res = await fetch(`${process.env.REACT_APP_API_LINK}/visitor`, {
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
    };
    postData();
  }, []);
};

export default useVisitor;
