import React from "react";

const FreelanceSection = () => {
  return (
    <section
      className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-gray-100 dark:bg-gray-900"
      id="freelance"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
        💼 Hire Me for Freelance Projects
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
        I'm available for freelance work in full-stack development. I specialize
        in building fast, scalable, and maintainable web apps using the MERN stack.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-10 px-4">
        <li>🔧 MERN Stack Development</li>
        <li>⚡ Responsive Landing Pages</li>
        <li>📦 REST APIs & Backend Systems</li>
        <li>🛠️ Bug Fixes & Code Optimization</li>
      </ul>

      <div className="text-center mt-10">
        <a
          href="mailto:sandeekumar80832718@gmail.com"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 text-base sm:text-lg"
        >
          📩 Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default FreelanceSection;
