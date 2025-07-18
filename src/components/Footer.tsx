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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1697788.5733075673!2d-116.693335!3d33.786671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaed09da580eccaff%3A0x61efb731b8fe4787!2sDriveway%20Blasters%20LLC!5e0!3m2!1sen!2sus!4v1718763313824!5m2!1sen!2sus"
          width="350"
          height="350"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="google-map mb-3  basis-1/4"
        ></iframe>

        <div className="footer-contact basis-1/4">
          <h2>Contact Us</h2>
          <li className="text-black list-none text-start mb-3 font-bold">
            Monday - Sunday: <br /> 10:00 AM - 8:00 PM PST
          </li>

          <ul className="pl-0 font-bold">
            <li className="mt-1">
              <a
                href="mailto:drivewayblaster@gmail.com"
                className="no-underline text-black"
              >
                <EmailIcon /> drivewayblaster@gmail.com
              </a>
            </li>
            <li className="mt-1">
              <a href="tel:+19493570197" className="no-underline text-black">
                <PhoneIcon /> (949) 357-0197
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links basis-1/4">
          <div className="wrapper">
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
            <div style={{ cursor: 'pointer' }}>
              <KeyboardDoubleArrowRightIcon style={{ color: '#4a8aea' }} />
              <Link href="/brick-cleaning" passHref>
                Brick
              </Link>
            </div>
          </div>
        </div>

        <div className="our-mission flex-grow basis-1/4">
          <h2 className="text-left">Our Mission</h2>
          <p className="p-2">
            We're dedicated to providing the best cleaning services in Orange,
            Riverside and Los Angeles County. We are committed to providing the
            highest quality service to our customers and ensuring that they are
            completely satisfied with the results.
          </p>
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
