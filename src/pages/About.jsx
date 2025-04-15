import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-11">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-600 dark:text-yellow-400"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* About content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div
            data-aos="fade-right"
            className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 shadow-xl border-4 border-gray-300 dark:border-gray-700"
          >
            <img
              src="https://res.cloudinary.com/dntmiu082/image/upload/w_1000,c_fill,ar_1:1,g_auto/v1744462385/IMG20220422164824_ckh9a9.jpg"
              alt="Sandeep Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            data-aos="fade-left"
            className="max-w-3xl text-center md:text-left"
          >
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              Hi! I'm Sandeep Kumar, a passionate Full Stack Web Developer with a strong focus on building modern, responsive, and user-friendly websites and applications. My expertise lies in using cutting-edge technologies to deliver high-quality digital solutions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Over the years, I’ve honed my skills in React, Node.js, MongoDB, and Tailwind CSS, and I’m always eager to learn new tools and frameworks. My goal is to create meaningful, impactful digital experiences while constantly improving my skills and embracing new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
