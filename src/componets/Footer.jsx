import React from "react";

function Footer() {
  // Function to scroll to the specified section
  const scrollToElement = (elementId) => {
    const section = document.getElementById(elementId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="footer-container">
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
