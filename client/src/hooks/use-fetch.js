import { useEffect } from "react";

const useFetch = () => {
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch("/test");
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };
    // fetchData();

    const postData = async () => {
      try {
        const res = await fetch('/test',{
            method: 'POST', 
            body: JSON.stringify({
              aras: "hi"
            }), 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
          });

        if (!res.ok) {
            console.error("Something went awry!");
        }

        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    postData();
  }, []);
};

export default useFetch;
