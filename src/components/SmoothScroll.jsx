// ScrollToTop.jsx
// SmoothScroll.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = () => {
  const { pathname } = useLocation(); // Get current pathname

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top with smooth behavior
  }, [pathname]); // Trigger when the route changes

  return null; // No UI is rendered
};

export default SmoothScroll;
