import { useState, useEffect } from "react";
const useClickOutside = (ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOustside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOustside);
    return () => document.removeEventListener("mousedown", handleClickOustside);
  }, [isOpen, ref]);
  return [isOpen, setIsOpen];
};
export default useClickOutside;
