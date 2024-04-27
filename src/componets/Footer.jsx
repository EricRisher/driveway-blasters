import React from "react";

function Footer() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a
              href="https://www.facebook.com/DrivewayBlastersLLC"
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
