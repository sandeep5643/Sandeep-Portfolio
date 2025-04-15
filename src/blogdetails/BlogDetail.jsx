import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const BlogDetail = () => {
  const { slug } = useParams();

  const postContent = {
    "react-hooks": {
      title: "Understanding React Hooks",
      content: `
React Hooks revolutionized the way we write components in React by allowing us to use state, side effects, and other React features without writing a class component.

### 🔹 What are React Hooks?
Hooks are special functions that let you “hook into” React features. The most common hooks are:
- \`useState()\` – to add state in functional components
- \`useEffect()\` – to perform side effects like data fetching, subscriptions, etc.
- \`useContext()\` – to access context values easily

### 🔹 Why Use Hooks?
Hooks make code:
- Cleaner and easier to read
- More reusable (via custom hooks)
- Compatible with functional programming

### 🔹 Example: useState
\`\`\`jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### 🔹 useEffect Example
\`\`\`jsx
useEffect(() => {
  console.log("Component mounted or updated");

  return () => {
    console.log("Cleanup before unmount");
  };
}, []);
\`\`\`

### 🔹 Best Practices
- Always use hooks at the top level of your component
- Never call hooks inside loops, conditions, or nested functions
- Create **custom hooks** for reusable logic

### 🔹 Summary
Hooks simplify state management and side effects in functional components. They help us write clean, concise, and modern React code.

---
Happy Coding! ✨
      `,
    },
    "js-closures": {
      title: "Mastering JavaScript Closures",
      content: `
Closures are a powerful and important concept in JavaScript that allow functions to access variables from an outer function scope even after the outer function has finished executing.

---

### 🔹 What is a Closure?

A **closure** is created when a function "remembers" its lexical scope — the variables and functions available in the environment where it was defined.

---

### ✅ Basic Example:

\`\`\`js
function outerFunction() {
  let outerVar = "I am from the outer function";

  function innerFunction() {
    console.log(outerVar); // Accessing variable from outer scope
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am from the outer function
\`\`\`

> Even though \`outerFunction\` has already finished executing, \`innerFunction\` still has access to \`outerVar\` — that’s a closure.

---

### 🔹 Why are Closures Useful?

Closures are used to:
- **Encapsulate data** (like private variables)
- Create **function factories**
- **Maintain state** across function calls
- Implement **callback functions**

---

### 🔹 Closure in Loops (Common Pitfall)

\`\`\`js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Output: 4 4 4
\`\`\`

✅ Fix using closure:

\`\`\`js
for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}
// Output: 1 2 3
\`\`\`

---

### 🔹 Real-World Example – Counter

\`\`\`js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
\`\`\`

> Here, the \`count\` variable remains in memory because of closure. Each call updates the same \`count\`.

---

### 🔹 Interview Quick Answer 💡

**Q: What is a closure in JavaScript?**  
**A:** A closure is a function that has access to its own scope, the scope of the outer function, and the global scope — even after the outer function has returned.

---

### 🔹 Summary

- Closures help retain access to variables from the outer scope
- They are essential for managing state and creating reusable logic
- Mastering closures will greatly improve your understanding of JavaScript

---
Happy Coding! 🚀
      `,
    },
    "nodejs-intro": {
      title: "Introduction to Node.js",
      content: `
Node.js is a powerful and popular JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server side.

---

### 🔹 What is Node.js?

Node.js lets you build scalable and high-performance network applications using JavaScript outside the browser.

---

### 🔹 Features of Node.js

- **Asynchronous & Event Driven**: Non-blocking I/O operations.
- **Fast Execution**: Built on Google Chrome's V8 JavaScript Engine.
- **Single Programming Language**: Use JavaScript on both frontend and backend.
- **NPM**: Huge ecosystem of open-source libraries.

---

### 🔹 Simple Example

\`\`\`js
// Load the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js server!');
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
\`\`\`

---

### 🔹 When to Use Node.js?

- Real-time applications (e.g. chat apps)
- REST APIs
- Streaming services
- Command line tools

---
Node.js empowers developers to build fast, scalable backend services using JavaScript. It’s widely adopted in modern full-stack development.

Happy Backend Coding! 🚀
`,
    },
  };

  const post = postContent[slug];

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center text-red-500 text-xl font-semibold text-center px-4">
        Blog Post not found
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-8 leading-tight text-center">
          {post.title}
        </h2>
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none prose-pre:bg-gray-900 prose-pre:text-white prose-code:text-pink-500">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;