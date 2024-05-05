import React, { useState, useEffect } from "react";

function Navbar() {
  // Function to scroll to the specified section
  const scrollToElement = (elementId) => {
    const section = document.getElementById(elementId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Added a small threshold to ensure the navbar hides as expected
      const threshold = 500; // You can adjust this threshold
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - threshold;
      setNavbarVisible(!isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isNavbarVisible ? "" : "navbar-hidden"}`}>
      <div className="navbar-container">
        <div className="navbar-links">
          <div
            onClick={() => scrollToElement("Header")}
            style={{ cursor: "pointer" }}
          >
            Home
          </div>
          <div
            onClick={() => scrollToElement("Services")}
            style={{ cursor: "pointer" }}
          >
            Services
          </div>
          <div
            onClick={() => scrollToElement("Contact")}
            style={{ cursor: "pointer" }}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
