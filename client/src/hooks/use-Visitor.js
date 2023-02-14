import { useEffect } from "react";

const useVisitor = () => {
  useEffect(() => {
    const postData = async () => {
      const ipRes = await fetch("https://www.myexternalip.com/json");
      const ipData = await ipRes.json();
      const ip = ipData.ip;

      try {
        const res = await fetch("/visitor", {
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
