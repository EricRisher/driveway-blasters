'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import logo from '../../public/icons/logo and name.png';
import yelp from '../../public/icons/yelpicon.png';
import facebook from '../../public/icons/fb-icon.png';

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => {
    setAnchorEl(null);
    setNavActive(false);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); // Toggle dropdown
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setBgColor(position > 5);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 100) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`navbar ${navActive ? 'active' : ''} ${
        bgColor ? 'navbar-colored' : ''
      }`}
    >
      <div onClick={() => (window.location.href = '/')}>
        <Image
          src={logo}
          alt="portfolio logo"
          className="logo"
          style={{ cursor: 'pointer' }}
        />
      </div>
      <button
        className={`nav__hamburger ${navActive ? 'active' : ''}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div className={`navbar--items ${navActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link href="/" passHref>
              <span className="navbar--content" onClick={closeMenu}>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/locations" passHref>
              <span className="navbar--content" onClick={closeMenu}>
                Locations
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="navbar--content" onClick={closeMenu}>
                Contact Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about-us" passHref>
              <span className="navbar--content" onClick={closeMenu}>
                About our Team
              </span>
            </Link>
          </li>
          <li onClick={handleMenu} className="navbar--services">
            <div className="navbar--content">
              Services{' '}
              <ExpandMoreIcon
                className={isOpen ? 'icon-rotate service-svg' : 'service-svg'}
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
                <Link href="/driveway-deck-revival" passHref>
                  {' '}
                  <b>Driveway & Deck Revival</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/house-roof-care" passHref>
                  <b>House & Roof Care</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/windows" passHref>
                  {' '}
                  <b>Window Clarity</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/gutters" passHref>
                  {' '}
                  <b>Gutter Cleaning</b>
                </Link>
              </MenuItem>
            </Menu>
          </li>
        </ul>
        <Link
          href="/contact"
          className="button btn-primary"
          onClick={closeMenu}
          passHref
        >
          {' '}
          Get Your Free Quote!
        </Link>
        <div className="d-flex flex-column align-items-center mt-5">
          <h2>Keep up with us on</h2>
          <div className="d-flex flex-row align-items-center">
            <a
              href="https://www.yelp.com/biz/driveway-blasters-corona"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Image src={yelp} alt="Yelp icon" className="mx-2" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558602227969"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Image src={facebook} alt="Facebook icon" className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
