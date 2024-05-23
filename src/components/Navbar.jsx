import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/icons/logo and name.png";
import yelp from "../assets/icons/yelpicon.png";
import facebook from "../assets/icons/fb-icon.png";

function Navbar() {
  const location = useLocation();
  const [navActive, setNavActive] = useState(false);
  const [bgColor, setBgColor] = useState(false); // State to manage the background color
  const [anchorEl, setAnchorEl] = useState(null); // Material-UI menu anchor
  const isOpen = Boolean(anchorEl); // Determines if the dropdown is open

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => {
    setNavActive(false);
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
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
      if (window.innerWidth <= 1200) {
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
      id="Navbar"
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
              onClick={closeMenu}
              activeClass="navbar--active-content"
              to="/"
              className="navbar--content"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              activeClassName="navbar--active-content"
              className="navbar--content"
              onClick={closeMenu}
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="navbar--active-content"
              className="navbar--content"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Our Team
            </ScrollLink>
          </li>
          <li
            onMouseEnter={handleMenu}
            onMouseLeave={handleClose}
            className="navbar--services"
          >
            <div className="navbar--content">
              Services{" "}
              <ExpandMoreIcon
                className={isOpen ? "icon-rotate service-svg" : "service-svg"}
              />
            </div>
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}>
                <NavLink to="/driveway-deck-revival">
                  <b>Driveway & Deck Revival</b>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/house-roof-care">
                  <b>House & Roof Care</b>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/window-gutter-cleaning">
                  <b>Window & Gutter Cleaning</b>
                </NavLink>
              </MenuItem>
            </Menu>
          </li>
        </ul>
        <button
          className="btn btn-primary"
          onClick={() =>
            location.pathname === "/"
              ? (window.location.href = "/contact")
              : null
          }
        >
          Get Your Free Quote!
        </button>
        <div className="d-flex flex-column align-items-center mt-5">
          <h2>Keep up with us on</h2>
          <div>
            <a
              href="https://www.yelp.com/biz/driveway-blasters-corona"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yelp} alt="Yelp icon" className="mx-2" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558602227969"
              target="_blank"
              rel="noopener noreferrer"
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
