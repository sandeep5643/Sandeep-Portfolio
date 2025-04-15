import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const DarkModeContext = createContext();

// Custom hook to use dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// DarkModeProvider component
export const DarkModeProvider = ({ children }) => {
  // Check if dark mode is saved in localStorage
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  
  // Set initial state from localStorage or default to false
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode); // Save to localStorage
      return newMode;
    });
  };

  useEffect(() => {
    // If darkMode is true, add dark class to body
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

