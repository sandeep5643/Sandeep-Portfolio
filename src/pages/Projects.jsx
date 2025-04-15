import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData = [
  {
    category: "Web Development",
    title: "StudyNotion: Unlock Your Learning Potential",
    description: "StudyNotion is a comprehensive EdTech platform built using the MERN stack. It provides users with interactive courses, personalized learning paths, and tools to track progress.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "https://res.cloudinary.com/dntmiu082/image/upload/c_thumb,w_200,g_face/v1744465976/Screenshot_2025-04-12_192219_uxocpm.png",
    demoLink: "https://study-notion-orpin-nu.vercel.app",
    codeLink: "https://github.com/sandeep5643/StudyNotion"
  },
  {
    category: "Web Utility",
    title: "Weather App",
    description: "A simple weather app that fetches real-time weather data using OpenWeatherMap API. Users can input a city name to get temperature, humidity, and conditions.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    imageUrl: "https://res.cloudinary.com/dntmiu082/image/upload/c_thumb,w_200,g_face/v1744467976/Screenshot_2025-04-12_195545_btsgai.png",
    demoLink: "https://weather-app-sandeep-kumars-projects-3b112ec9.vercel.app/",
    codeLink: "https://github.com/sandeep5643/WeatherApp"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 150,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 lg:px-8 mt-11"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-yellow-600 dark:text-yellow-400">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                          transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl 
                          flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-44 sm:h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="font-medium text-gray-800 dark:text-gray-200 mb-1 text-sm">Technologies:</p>
                    <ul className="flex flex-wrap gap-2 text-xs sm:text-sm">
                      {project.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="bg-yellow-200 dark:bg-yellow-700 text-black dark:text-white px-2 py-1 rounded-md"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-yellow-500 dark:bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-400 dark:hover:bg-yellow-300 font-semibold text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent border border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded hover:bg-yellow-50 hover:text-black font-semibold text-sm duration-700"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;