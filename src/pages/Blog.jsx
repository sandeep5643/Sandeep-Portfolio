import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding React Hooks",
      description:
        "React hooks are functions that let you use state and lifecycle features in functional components. Learn how hooks work and how to use them effectively.",
      link: "/blog/react-hooks",
    },
    {
      title: "Mastering JavaScript Closures",
      description:
        "Closures are a fundamental concept in JavaScript. This post explains closures, their uses, and how they work in JavaScript.",
      link: "/blog/js-closures",
    },
    {
      title: "Introduction to Node.js",
      description:
        "Node.js is a runtime environment that allows you to run JavaScript on the server. This tutorial covers the basics of setting up and working with Node.js.",
      link: "/blog/nodejs-intro",
    },
  ];

  return (
    <section
      id="blog"
      className="min-h-fit py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-yellow-600 dark:text-yellow-400">
          Blog
        </h2>
        <p className="text-lg sm:text-xl mb-10 text-gray-700 dark:text-gray-300">
          Explore my technical blogs and tutorials that share my insights and knowledge on various topics in web development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4 hover:text-yellow-600 dark:hover:text-yellow-400">
                <Link to={post.link}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              <Link
                to={post.link}
                className="text-yellow-600 dark:text-yellow-400 hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;