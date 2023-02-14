import { useEffect, useState } from "react";

const useAssessHeight = (elementId) => {
  const [height, setHeight] = useState();

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (element) {
      setHeight(element.getBoundingClientRect().height);
    }
  }, [elementId]);

  if (height) {
    return height;
  }
};

export default useAssessHeight;
