"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "@/context/themeContext";
import { useMediaQuery } from "@/hooks";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("isDarkTheme");
    if (savedTheme !== null) return JSON.parse(savedTheme);
    return prefersDarkTheme;
  });

  useEffect(
    () => localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme)),
    [isDarkTheme]
  );

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <div className={`min-h-screen${isDarkTheme ? " dark" : ""}`}>
        <div className="text-[#1E1E1E] dark:text-white dark:bg-black">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
