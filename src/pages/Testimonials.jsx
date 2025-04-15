import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialsData = [
  {
    name: "Priya Sharma",
    role: "Project Teammate",
    feedback:
      "Working with you on our college project was a great experience! Your JavaScript skills and problem-solving mindset really made a difference.",
  },
  {
    name: "Rahul Mehta",
    role: "Classmate",
    feedback:
      "You're always ready to help others and explain concepts clearly. Your passion for learning is truly inspiring!",
  },
  {
    name: "Aman Verma",
    role: "Mentor",
    feedback:
      "You have a bright future ahead! Keep up the consistent efforts and keep building projects. You're on the right path.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="testimonial" className="bg-gray-100 dark:bg-gray-900 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-10"
          data-aos="fade-up"
        >
          What People Say About Me 💬
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300 ease-in-out"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <p className="text-gray-700 dark:text-gray-200 italic">
                "{testimonial.feedback}"
              </p>
              <div className="mt-4">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;