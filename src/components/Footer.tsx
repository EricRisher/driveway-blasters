'use client';

import Link from 'next/link';
import { useEffect, useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../public/images/icon.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Footer: React.FC = () => {
  const [routerMounted, setRouterMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setRouterMounted(true);
  }, []);

  const scrollToElement = useCallback(
    (elementId: string) => {
      const doScroll = () => {
        const section = document.getElementById(elementId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (pathname !== '/') {
        window.location.href = `/#${elementId}`;
        setTimeout(doScroll, 50);
      } else {
        doScroll();
      }
    },
    [pathname],
  );

  if (!routerMounted) {
    return null;
  }
  return (
    <div className="footer-container" id="Footer">
      <div className="footer">
        <div className="footer-info-wrapper">
          <Image
            src={logo}
            alt="Driveway Blasters Logo"
            width={100}
            height={100}
            className="ml-3 mt-2 mb-1"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1697788.5733075673!2d-116.693335!3d33.786671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaed09da580eccaff%3A0x61efb731b8fe4787!2sDriveway%20Blasters%20LLC!5e0!3m2!1sen!2sus!4v1718763313824!5m2!1sen!2sus"
            width="300"
            height="300"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="google-map pt-3 mb-3"
          ></iframe>
        </div>

        <div className="our-mission">
          <h2>Our Mission</h2>
          <p className="p-2">
            We're dedicated to providing the best cleaning services in Orange,
            Riverside and Los Angeles County. We are committed to providing the
            highest quality service to our customers and ensuring that they are
            completely satisfied with the results.
          </p>
        </div>

        <div className="footer-links">
          <div className='wrapper' >
          <h2>Services</h2>
          <div style={{ cursor: 'pointer' }}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
            <Link href="/driveway-revival" passHref>
              Driveways
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
            <Link href="/deck-cleaning" passHref>
              Decks
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
            <Link href="/exterior-house-washing" passHref>
              House Exteriors
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
            <Link href="/roof-cleaning" passHref>
              Roofs
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
            <Link href="/window-clarity" passHref>
              Windows
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
            <Link href="/solar-panel-efficiency" passHref>
              Solar Panels
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
            <Link href="/gutter-cleaning" passHref>
              Gutters
            </Link>
          </div>
          </div>
        </div>

        <div className="footer-contact">
          <h2 className="pb-4">Contact Us</h2>
          <ul className="p-1 font-bold">
            <p className="pb-3">
              Monday-Friday: 10:00 AM - 8:00 PM
              <br />
              Saturday: Closed
              <br />
              Sunday: 10:00 AM - 8:00 PM
            </p>
            <ul>
              <li className="mt-1">
                <a
                  href="mailto:drivewayblaster@gmail.com"
                  className="no-underline text-black"
                >
                  <EmailIcon /> drivewayblaster@gmail.com
                </a>
              </li>
              <li className="mt-1">
                <a href="tel:+19494843698" className="no-underline text-black">
                  <PhoneIcon /> (949) 484-3698
                </a>
              </li>
              <li className="mt-1">
                <a href="tel:+19495408402" className="no-underline text-black">
                  <PhoneIcon /> (949) 540-8402
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <p>
          <b>© 2024 Driveway Blasters LLC</b>
        </p>
        <p className="eric">
          Website by{' '}
          <Link
            href="https://www.ericrisher.com"
            target="_blank"
            rel="noreferrer"
          >
            <b>Eric Risher</b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
