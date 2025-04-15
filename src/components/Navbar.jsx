import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useDarkMode } from "../context/DarkModeContext";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "resume", label: "Resume" },
    { to: "blog", label: "Blog" },
    { to: "testimonial", label: "Testimonials" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-screen bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-xl font-bold text-blue-600 dark:text-yellow-400"
        >
          Explore My Work and Projects
        </ScrollLink>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-900 dark:text-white">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-900 dark:text-white hover:text-blue-600"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle (Desktop) */}
        <div className="hidden md:block ml-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-800 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-full hover:bg-gray-700 dark:hover:bg-yellow-500 transition duration-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-800 px-6 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    className="block text-gray-900 dark:text-white hover:text-blue-600"
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    toggleDarkMode();
                    closeMenu();
                  }}
                  className="w-full mt-2 bg-gray-800 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-full hover:bg-gray-700 dark:hover:bg-yellow-500 transition duration-300"
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
