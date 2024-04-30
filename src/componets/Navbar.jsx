import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Function to scroll to the specified section
  const scrollToElement = (elementId) => {
    const section = document.getElementById(elementId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <div
            onClick={() => scrollToElement("Services")}
            style={{ cursor: "pointer" }}
          >
            Services
          </div>
          {/*<Link to="/our-story">Our Story</Link> */}
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
