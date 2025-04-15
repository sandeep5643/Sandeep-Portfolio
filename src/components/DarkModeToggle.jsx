import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-800 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-full hover:bg-gray-700 dark:hover:bg-yellow-500 transition duration-300"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;

