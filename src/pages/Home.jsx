import { motion } from "framer-motion";
import Footer from "../components/Footer";
import About from "./About"; // Import About Component
import Contact from "./Contact"; // Import Contact Component
import Projects from "./Projects"; // Import Projects Component
import Experience from "./Experience";
import Resume from "./Resume";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Navbar from "../components/Navbar";
import AnimatedName from "../components/AnimatedName";

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar/>
      <div id="home" className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900 pt-16">
      {/* Hero Section */}
      <section
          id="hero"
          className="flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-20 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >

          <AnimatedName/>
        {/* <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [1, 0.9, 1],
            y: [0, -5, 0],
            scale: [1, 1.03, 1],
            textShadow: [
              "0 0 0 rgba(0,0,0,0)",
              "0 0 15px rgba(255,255,255,0.2)",
              "0 0 0 rgba(0,0,0,0)",
            ],
          }}
          transition={{
            duration: 4,         // slower animation
            repeat: Infinity,    // loop forever
            ease: "easeInOut",   // smooth transition
          }}
        >
          Hi, I'm <span className="text-blue-600 dark:text-yellow-400">Sandeep Kumar</span>
        </motion.h1> */}



        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A results-driven <span className="font-semibold text-blue-500 dark:text-yellow-300">Full Stack Web Developer</span> with a knack for building scalable and responsive web applications. I specialize in crafting seamless user experiences with modern tech stacks like <span className="font-semibold text-purple-600 dark:text-yellow-400">MERN</span>.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:text-yellow-400 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-14 bg-white dark:bg-gray-900">
        <div className="bg-slate-800 flex flex-col items-center justify-center gap-6 px-6 sm:px-10 md:px-16 py-14 rounded-xl w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Tech Stack & Tools
          </h2>

          <p className="text-center text-gray-300 text-sm sm:text-base max-w-2xl">
            Here's a snapshot of the technologies I use regularly to bring ideas to life and deliver impactful digital experiences.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Redux",
              "Git & GitHub",
              "Framer Motion",
              "REST APIs",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow text-sm sm:text-base text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      <div>
        {/* Experience Section */}
        <Experience/>
      </div>

      <div>
        {/*Resume Section*/}
        <Resume/>
      </div>

      <div>
        {/* Blog Section */}
        <Blog/>
      </div>

      <div>
        {/* Testimonials Section  */}
        <Testimonials/>
      </div>

      {/* Contact Section */}
      <Contact />

      <Footer />

    </div>
  </div>
  );
};

export default Home;
