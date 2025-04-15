import React, { useState, useEffect } from "react";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  const [downloading, setDownloading] = useState(false);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation will trigger only once
    });
  }, []);

  const handleDownload = () => {
    setDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/SandeepKumar.pdf";
      link.setAttribute("download", "Sandeep_Kumar_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 2000);
  };

  return (
    <section
      id="resume"
      className="min-h-[50vh] py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-yellow-600 dark:text-yellow-400"
          data-aos="fade-up"
        >
          Resume
        </h2>

        <p
          className="text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          You can download my resume or check out my professional profile online.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Downloadable Resume with smooth delay */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform ${
              downloading
                ? "bg-gray-400 text-white cursor-not-allowed scale-95"
                : "bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105"
            }`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaDownload />
            {downloading ? "Downloading..." : "Download Resume"}
          </button>

          {/* LinkedIn or other profile */}
          <a
            href="https://linkedin.com/in/sandeep-kumar-11240b292"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-50 hover:text-black transition duration-700 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaLinkedin />
            Visit LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;