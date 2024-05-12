import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import fbIcon from "../assets/icons/fb-icon.svg";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");

    // Check if already on the home page and just scroll to the contact
    if (location.pathname === "/" && window.location.hash !== "#Contact") {
      window.location.hash = "Contact";
      setTimeout(() => {
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      navigate("/#Contact");
      setTimeout(() => {
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  // Function to open Facebook profile in a new tab
  const navigateToFb = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61558602227969",
      "_blank"
    );
  };

  // Function to handle navigation to the Home page
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="header" id="Header">
      <div className="logo-container">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={navigateToHome}
          style={{ cursor: "pointer" }}
        />
        <div className="text-container">
          <h1 className="logo-text">Driveway Blasters LLC</h1>
        </div>
      </div>
      <div className="header-contact-container">
        <button
          className="contact-button btn btn-primary"
          onClick={scrollToContact}
        >
          Free Quote!
        </button>
        <img
          src={fbIcon}
          alt="fb-icon"
          className="fb-icon"
          onClick={navigateToFb}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Header;
