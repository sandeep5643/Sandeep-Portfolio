import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { DarkModeProvider } from "./context/DarkModeContext";
import SmoothScroll from "./components/SmoothScroll";
import BlogDetail from "./blogdetails/BlogDetail";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <SmoothScroll /> {/* Smooth scroll between anchor links */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;