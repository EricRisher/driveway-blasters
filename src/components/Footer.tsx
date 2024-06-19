'use client';

import Link from 'next/link';
import { useEffect, useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../public/images/icon.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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
        <div className="footer-info-wrapper flex flex-nowrap justify-around w-100">
          <Image
            src={logo}
            alt="Driveway Blasters Logo"
            width={100}
            height={100}
            className="ml-3 mt-4 mb-1"
          />
          <ul className="mt-3 p-0 text-white font-bold">
            <li className='mt-1'>
              <a
                href="mailto:drivewayblaster@gmail.com"
                className="text-white no-underline"
              >
                <EmailIcon /> drivewayblaster@gmail.com
              </a>
            </li>
            <li className='mt-1'>
              <a
                href="tel:+19494843698"
                className="text-white no-underline fw-thin"
              >
                <PhoneIcon /> (949) 484-3698
              </a>
            </li>
            <li className='mt-1'>
              <a href="tel:+19495408402" className="text-white no-underline">
                <PhoneIcon /> (949) 540-8402
              </a>
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1697788.5733075673!2d-116.693335!3d33.786671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaed09da580eccaff%3A0x61efb731b8fe4787!2sDriveway%20Blasters%20LLC!5e0!3m2!1sen!2sus!4v1718763313824!5m2!1sen!2sus"
          width="93%"
          height="300"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="google-map pt-3"
        ></iframe>
        <div className="footer-links">
          <div style={{ cursor: 'pointer' }}>
            <Link href="/driveway-deck-revival" passHref>
              Driveways & Decks
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Link href="/house-roof-care" passHref>
              Houses & Roofs
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Link href="/windows-solar-panels" passHref>
              Windows & Solar Panels
            </Link>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Link href="/gutter-cleaning" passHref>
              Gutters
            </Link>
          </div>
        </div>

        <div className="footer-contact">
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
    </div>
  );
};

export default Footer;
