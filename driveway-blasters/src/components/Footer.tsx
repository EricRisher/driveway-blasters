"use client";

import Link from "next/link";
import { useEffect, useCallback, useState } from "react";
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const [routerMounted, setRouterMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setRouterMounted(true);
  }, []);

  const scrollToElement = useCallback((elementId: string) => {
    const doScroll = () => {
      const section = document.getElementById(elementId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (pathname !== "/") {
      window.location.href = `/#${elementId}`;
      setTimeout(doScroll, 50);
    } else {
      doScroll();
    }
  }, [pathname]);

  if (!routerMounted) {
    return null;
  }
  return (
    <div className="footer-container" id="Footer">
      <div className="footer">
        <div className="footer-links">
          <div style={{ cursor: "pointer" }}>
            <Link href="/driveway-deck-revival" passHref>Driveway & Decks
            </Link>
          </div>
          <div style={{ cursor: "pointer" }}>
            <Link href="/house-roof-care" passHref>House & Roofs
            </Link>
          </div>
          <div style={{ cursor: "pointer" }}>
            <Link href="/windows" passHref>Windows
            </Link>
          </div>
          <div style={{ cursor: "pointer" }}>
            <Link href="/gutters" passHref>Gutters
            </Link>
          </div>
        </div>
        <div className="footer-contact">
          <p>
            <b>© 2024 Driveway Blasters LLC</b>
          </p>
          <p className="eric">
            Website by{" "}
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
