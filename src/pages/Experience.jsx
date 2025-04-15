import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: true, // only once when scrolled into view
      easing: "ease-in-out", // smooth easing effect
    });
    AOS.refresh(); // refresh AOS if needed
  }, []);

  return (
    <section
      id="experience"
      className="min-h-fit px-6 sm:px-8 lg:px-12 pt-20 pb-16 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-yellow-600 dark:text-yellow-400"
          data-aos="fade-up"
        >
          Experience
        </h2>

        <div
          className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <p
            className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I am currently a{" "}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">
              student
            </span>{" "}
            focused on building a strong foundation in web development and programming.
          </p>

          <p
            className="text-md sm:text-lg text-gray-700 dark:text-gray-300 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Although I don’t have formal work experience yet, I’ve been consistently working on personal and academic projects to gain practical exposure. I’m actively seeking opportunities like{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              internships, freelance projects, or collaborations
            </span>{" "}
            to enhance my skills and contribute to real-world solutions.
          </p>

          <p
            className="text-md sm:text-lg text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Meanwhile, I continue to learn new technologies, solve problems, and create meaningful projects that demonstrate my potential and passion for development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;