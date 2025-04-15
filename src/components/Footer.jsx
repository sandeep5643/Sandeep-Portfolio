import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition">
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition">
              About
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition">
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 transition">
              Contact
            </ScrollLink>
          </div>
        </div>

        {/* Copyright and Socials */}
        <div className="flex flex-col items-center sm:items-end gap-6">
          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Sandeep Kumar. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="https://github.com/sandeep5643"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sandeep-kumar-11240b292"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sandeekumar80832718@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;