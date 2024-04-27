import React from "react";
import logo from "../assets/icons/logo.png";
import fbIcon from "../assets/icons/fb-icon.svg";

function Header() {
  // Function to handle scrolling
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact"); 
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="text-container">
          <h1 className="logo-text">Driveway Blasters LLC</h1>
        </div>
      </div>
      <div className="header-contact-container">
        {/* Updated button with onClick event handler */}
        <button
          className="contact-button btn btn-primary"
          onClick={scrollToContact}
        >
          Free Quote!
        </button>
        <img src={fbIcon} alt="fb-icon" className="fb-icon" />
      </div>
    </div>
  );
}

export default Header;
