import { useEffect } from "react";

const useFetch = () => {
  // const [result, setResult] = useState();
  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e.message));
  }, []);
};

export default useFetch;
