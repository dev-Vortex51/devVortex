"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ChildProps {
  children: React.ReactNode;
}
interface AppContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: ChildProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  function handleToggle() {
    setIsDarkMode((dark) => !dark);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (isDarkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, [isDarkMode]);
  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        handleToggle,
        isOpenSidebar,
        setIsOpenSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
export { AppProvider, useAppContext };
