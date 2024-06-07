import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/icons/logo and name.png";
import yelp from "../assets/icons/yelpicon.png";
import facebook from "../assets/icons/fb-icon.png";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => {
    setAnchorEl(null);
    setNavActive(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); // Toggle dropdown
  };

  const handleClose = () => {
     setAnchorEl(null);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 5) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 100) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`navbar ${navActive ? "active" : ""} ${
        bgColor ? "navbar-colored" : ""
      }`}
    >
      <div onClick={() => (window.location.href = "/")}>
        <img
          src={logo}
          alt="portfolio logo"
          className="logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className="navbar--content"
              onClick={closeMenu}
              activeClassName="navbar--active-content"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className="navbar--content"
              onClick={closeMenu}
              activeClassName="navbar--active-content"
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar--content"
              onClick={closeMenu}
              activeClassName="navbar--active-content"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="navbar--content"
              onClick={closeMenu}
              activeClassName="navbar--active-content"
            >
              About our Team
            </NavLink>
          </li>
          <li onClick={handleMenu} className="navbar--services">
            <div className="navbar--content">
              Services{" "}
              <ExpandMoreIcon
                className={isOpen ? "icon-rotate service-svg" : "service-svg"}
              />
            </div>
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={closeMenu}>
                <NavLink to="/driveway-deck-revival">
                  <b>Driveway & Deck Revival</b>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <NavLink to="/house-roof-care">
                  <b>House & Roof Care</b>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <NavLink to="/windows">
                  <b>Window Clarity</b>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <NavLink to="/gutters">
                  <b>Gutter Cleaning</b>
                </NavLink>
              </MenuItem>
            </Menu>
          </li>
        </ul>
        <NavLink to="/contact" className="btn btn-primary" onClick={closeMenu}>
          Get Your Free Quote!
        </NavLink>
        <div className="d-flex flex-column align-items-center mt-5">
          <h2>Keep up with us on</h2>
          <div>
            <a
              href="https://www.yelp.com/biz/driveway-blasters-corona"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <img src={yelp} alt="Yelp icon" className="mx-2" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558602227969"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <img src={facebook} alt="Facebook icon" className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
