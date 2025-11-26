import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData = [
  {
    category: "Web Development",
    title: "StudyNotion: Unlock Your Learning Potential",
    description: "StudyNotion is a comprehensive EdTech platform built using the MERN stack. It provides users with interactive courses, personalized learning paths, and tools to track progress.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "https://res.cloudinary.com/dntmiu082/image/upload/v1752299869/Screenshot_2025-07-12_112733_rbuqyk.png",
    demoLink: "https://study-notion-orpin-nu.vercel.app",
    codeLink: "https://github.com/sandeep5643/StudyNotion"
  },
  {
    category: "Web Development",
    title: "School-Website",
    description: "School-Website is a school management system built using HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, and MongoDB. It features an admin dashboard where the admin can manage students (view, add, and update status), handle profile details, and change passwords. The system includes a Message module that receives enquiries from the frontend and sends email notifications to the admin. It also provides a Fee Management module for tracking student fees, along with secure logout functionality. Additional features will be added in upcoming updates.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Cloudunary", "SendGrip", "bcrypt", "jsonwebtoken (JWT)", "mongoose", "uuid", "dotenv"],
    imageUrl: "https://res.cloudinary.com/dntmiu082/image/upload/v1752299502/Screenshot_2025-07-12_112048_kvwlbo.png",
    demoLink: "https://school-website-mu-bice.vercel.app",
    codeLink: "https://github.com/sandeep5643/school-website"
  },
  {
    category: "Web Development",
    title: "School-Coaching Management System",
    description: "School-Coaching Management System is a complete document and student management platform built using Tailwindcss, JavaScript, React.js, Node.js, Express.js, and MongoDB. It includes a secure Admin Dashboard where the admin can upload, update, and delete important PDF study materials, which are instantly visible to students on the frontend. Students can only view and download the PDFs, ensuring strict access control along with secure authentication and logout functionality. More advanced modules will be added in future updates.",
    technologies: ["JavaScript", "Tailwindcss", "React.js", "Node.js", "Express.js", "MongoDB", "sendgrid/mail", "nodemon", "mongoose", "dotenv", "aos", "axios", "bcrypt", "cookie-parser", "jsonwebtoken", "multer", "otp-generator", "concurrently", "framer-motion", "web-vitals"],
    imageUrl: "https://res.cloudinary.com/dntmiu082/image/upload/v1763378808/Screenshot_2025-11-17_165442_zttjv7.png",
    demoLink: "https://iit-ms-tutorial.vercel.app",
    codeLink: "https://github.com/sandeep5643/IITMsTutorial"
  },
  {
    category: "Web Development",
    title: "Expense Tracker Web Application",
    description: "This is a web-based Expense Tracker Application where a user can add, update, delete, and categorize their daily expenses. The backend is built using Flask, data is stored in an SQLite database, and the UI is made using HTML, CSS, and Bootstrap.",
    technologies: ["Python", "Flask", "SQLite", "SQLAlchemy", "HTML", "CSS", "Bootstrap " ],
    imageUrl: "https://res.cloudinary.com/dntmiu082/image/upload/v1764055123/Screenshot_2025-11-25_124659_a9nb7u.png",
    demoLink: "https://expense-tracker-backend-2iy5.onrender.com",
    codeLink: "https://github.com/sandeep5643/expense-tracker"
  },
  {
    category: "Web Development",
    title: "AI Chatbot",
    description: "A web-based AI Chatbot built using Flask and Google Gemini API. It supports rich markdown formatting, left-right chat UI, and production-ready deployment.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "API: Google Gemini API (Free Tier supported)", "Render"],
    imageUrl: "https://res.cloudinary.com/dntmiu082/image/upload/v1764073695/Screenshot_2025-11-25_175747_tf7zvi.png",
    demoLink: " https://chatbot-2bfb.onrender.com",
    codeLink: "https://github.com/sandeep5643/chatbot"
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