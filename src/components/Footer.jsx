import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to scroll to the specified section
  const scrollToElement = (elementId) => {
    // Function to perform the scrolling
    const doScroll = () => {
      const section = document.getElementById(elementId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Check if the user is already at the home page
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(doScroll, 50); // Adjust timing as needed
    } else {
      doScroll();
    }
  };

  return (
    <div className="footer-container" id="Footer">
      <div className="footer">
        <div className="footer-links">
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
          <a
            href="https://www.facebook.com/profile.php?id=61558602227969"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="footer-contact">
          <p>
            <b>© 2024 Driveway Blasters LLC</b>
          </p>
          <p className="eric">
            Website by{" "}
            <a
              href="https://www.ericrisher.com"
              target="_blank"
              rel="noreferrer"
            >
              <b>Eric Risher</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
