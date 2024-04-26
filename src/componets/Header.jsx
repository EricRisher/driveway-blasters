import React from "react";
import logo from "../assets/icons/logo.png";
import fbIcon from "../assets/icons/fb-icon.svg";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="text-container">
          <h1 className="logo-text">Driveway Blasters LLC</h1>
        </div>
      </div>
      <div className="contact-container">
        <button className="contact-button btn">Free Quote!</button>
        <img src={fbIcon} alt="fb-icon" className="fb-icon"></img>
      </div>
    </div>
  );
}

export default Header;
