import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      console.info("Data saved successfully:", response.data);
      toast.success("Message Sent Successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <div id="contact" className="flex flex-col min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="py-10 px-6 sm:px-8 md:px-20 flex-grow mt-14">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6"
          data-aos="fade-up"
        >
          Contact Me 📬
        </h2>

        {/* ==== Contact Form ==== */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="fade-up">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter first name"
                className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter last name"
                className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>

          <div className="mt-5" data-aos="fade-up" data-aos-delay="400">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
            />
          </div>

          <div className="mt-5" data-aos="fade-up" data-aos-delay="600">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
            />
          </div>

          <div className="mt-6" data-aos="fade-up" data-aos-delay="800">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition duration-300"
            data-aos="zoom-in-up"
            data-aos-delay="1000"
          >
            Send Message
          </button>
        </form>

        {/* ==== Social Links & Info ==== */}
        <div
          className="mt-12 max-w-xl mx-auto text-center space-y-4"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Connect With Me 🌐</h3>
          <p>Email: <a href="mailto:sandeekumar80832718@gmail.com?subject=Hello&body=I wanted to reach out..." className="text-blue-500 hover:underline">
                      sandeekumar80832718@gmail.com
                    </a>
          </p>
          <p>Location: Remote (Bhopal, India)</p>

          <div className="flex justify-center gap-6 text-2xl mt-4">
            <a
              href="https://linkedin.com/in/sandeep-kumar-11240b292"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sandeep5643"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-gray-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/@Sandeep33927291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-700"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactForm;