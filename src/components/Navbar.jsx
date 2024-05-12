import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const scrollToElement = (elementId) => {
    const doScroll = () => {
      const section = document.getElementById(elementId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(doScroll, 50);
    } else {
      doScroll();
    }
  };

  useEffect(() => {
    const footer = document.getElementById("Footer");
    if (footer) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setNavbarVisible(!entry.isIntersecting);
        },
        { threshold: 0.1 } // Adjust threshold based on when you want to toggle visibility
      );

      observer.observe(footer);
      return () => {
        observer.disconnect();
      };
    }
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
