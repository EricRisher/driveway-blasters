'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => {
    setAnchorEl(null);
    setNavActive(false);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setBgColor(position > 5);
  };

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else {
      setBgColor(true);
    }

    const handleResize = () => {
      if (window.innerWidth <= 100) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  return (
    <nav
      className={`navbar ${navActive ? 'active' : ''} ${
        bgColor ? 'navbar-colored' : ''
      }`}
    >
      <div
        onClick={() => (window.location.href = '/')}
        className="nav-header ml-5"
      >
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
        aria-label="Toggle navigation"
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
                <Link href="/driveway-revival" passHref>
                  {' '}
                  <b>Driveway Revival</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/deck-cleaning" passHref>
                  {' '}
                  <b>Deck Cleaning</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/exterior-house-washing" passHref>
                  <b>Exterior House Washing</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/roof-cleaning" passHref>
                  <b>Roof Cleaning</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/window-clarity" passHref>
                  {' '}
                  <b>Window Clarity</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/solar-panel-efficiency" passHref>
                  {' '}
                  <b>Solar Panel Efficiency</b>
                </Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link href="/gutter-cleaning" passHref>
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
