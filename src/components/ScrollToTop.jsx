import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation(); // Include hash in the location object destructuring

  useEffect(() => {
    // Only scroll to top if there's no hash targeting a specific page section
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Now dependent on both pathname and hash

  return null; // This component does not render anything
}

export default ScrollToTop;
