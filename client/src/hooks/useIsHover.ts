import { useState, useEffect, RefObject } from "react";

const useIsHover = (
  ref1: RefObject<HTMLButtonElement>,
  ref2: RefObject<HTMLDivElement>,
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const handleHover = (event): void => {
      if (ref1.current && ref2.current) {
        if (
          (!isVisible && ref1.current.contains(event.target)) ||
          ref2.current.contains(event.target)
        )
          setIsVisible(true);
        else if (
          isVisible &&
          !ref1.current.contains(event.target) &&
          !ref2.current.contains(event.target)
        )
          setIsVisible(false);
      }
    };
    document.addEventListener("mousemove", handleHover);
    return () => document.removeEventListener("mousemove", handleHover);
  }, []);

  return isVisible;
};
export default useIsHover;
