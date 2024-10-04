import { createContext, useState } from "react";

type Mode = "ligth" | "dark";

const GlobalContext = createContext<any>(null);

const GlobalContextProvider = ({ children }: any) => {
  const [mode, setMode] = useState<Mode>("ligth");

  const toggleMode = (): void => {
    const newTheme: Mode = mode === "dark" ? "ligth" : "dark";
    setMode(newTheme);
  };

  return (
    <GlobalContext.Provider value={{ mode, toggleMode }}>
      <div className={`${mode === "dark" ? "dark" : null}`}>{children}</div>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export { GlobalContext };
