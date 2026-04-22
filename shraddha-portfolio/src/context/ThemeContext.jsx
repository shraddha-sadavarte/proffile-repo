// context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] =  useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved !== null) {
      return saved === "dark";
    }
    // Default to dark mode
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("🌙 Dark mode activated - dark class added:", root.classList);
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("☀️ Light mode activated - dark class removed:", root.classList);
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}