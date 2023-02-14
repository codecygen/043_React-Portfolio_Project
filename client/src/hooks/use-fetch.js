import { useEffect } from "react";

const useFetch = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/test");
        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);
};

export default useFetch;
