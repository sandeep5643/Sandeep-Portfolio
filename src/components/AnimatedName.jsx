import { motion } from "framer-motion";

const AnimatedText = () => {
  const firstPart = "Hi, I'm "; // First part of the text
  const secondPart = "Sandeep Kumar"; // Second part of the text

  return (
    <motion.h1
      className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: [1, 0.9, 1],  // Text Pulse Effect
        y: [0, -5, 0],         // Bounce Animation
        scale: [1, 1.03, 1],   // Slight Zoom
        textShadow: [
          "0 0 0 rgba(0,0,0,0)",
          "0 0 15px rgba(255,255,255,0.2)",
          "0 0 0 rgba(0,0,0,0)",
        ],
      }}
      transition={{
        duration: 4,           // Slow continuous animation
        repeat: Infinity,      // Loop forever
        ease: "easeInOut",     // Smooth easing
      }}
    >
      {/* First part of the text with color */}
      {firstPart.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20 }}  // Start from left
          animate={{
            opacity: 1,
            x: 0,  // Move to its position
            transition: { delay: index * 0.05, duration: 0.5 }  // Delay each letter for smooth effect
          }}
          className="dark:text-white font-extrabold text-gray-900"  // Light Blue color for 'Hi, I'm'
        >
          {char}
        </motion.span>
      ))}

      {/* Second part of the text with different color */}
      {secondPart.split("").map((char, index) => (
        <motion.span
          key={index + firstPart.length}  // Ensure correct key after first part
          initial={{ opacity: 0, x: -20 }}  // Start from left
          animate={{
            opacity: 1,
            x: 0,  // Move to its position
            transition: { delay: (index + firstPart.length) * 0.05, duration: 0.5 }  // Delay each letter for smooth effect
          }}
          className="text-blue-600 dark:text-yellow-400 font-extrabold"  // Lime Green color for 'Sandeep Kumar'
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
