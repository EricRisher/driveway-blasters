'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ReactCompareImage from 'react-compare-image';

import drivewayBefore from '../../public/images/drivewaybefore.webp';
import drivewayAfter from '../../public/images/drivewayafter.webp';

import housewashBefore from '../../public/images/housewashbefore.webp';
import housewashAfter from '../../public/images/housewashafter.webp';

import guttersBefore from '../../public/images/beforegutters.webp';
import guttersAfter from '../../public/images/aftergutters.webp';

import windowBefore from '../../public/images/windowbefore.webp';
import windowAfter from '../../public/images/windowafter.webp';

const services = [
  {
    title: 'Driveway & Deck Revival',
    description:
      "Don't have the right tools or time? Our specialized high-quality equipment and expertise can handle even the toughest stains. Our commercial pressure washing services will rejuvenate your driveway and deck, making them look like new.",
    before: drivewayBefore,
    after: drivewayAfter,
    href: '/driveway-deck-revival',
  },
  {
    title: 'House & Roof Care',
    description:
      'Cleaning your roof is never an easy job but, that’s why you should trust us to bring your home a top-to-bottom shine! Our soft wash services are tailored to protect your home!',
    before: housewashBefore,
    after: housewashAfter,
    href: '/house-roof-care',
  },
  {
    title: 'Window Clarity',
    description:
      'With our advanced and thorough cleaning of window sills, frames, and tracks not only delivers a brilliant reflective shine but also ensures lasting cleanliness that resists the first signs of rain.',
    before: windowBefore,
    after: windowAfter,
    href: '/windows',
  },
  {
    title: 'Gutter Cleaning',
    description:
      "Without regularly cleaned gutters they won't function properly and will lead to costly repairs. So let us leave you with clean, good-looking, and functional gutters.",
    before: guttersBefore,
    after: guttersAfter,
    href: '/gutters',
  },
];

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting);
        });
      },
      { rootMargin: '0px', threshold: 0.1 },
    );

    const cards = document.querySelectorAll('.service');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-container mt-3" id="Services">
      <h2 className="services-h1">
        <b>Services</b>
      </h2>
      <div className="services">
        {services.map((service, index) => (
          <section className="service" key={index}>
            <h2>
              <b>{service.title}</b>
            </h2>
            <div className="imageWrapper">
              <ReactCompareImage
                leftImage={service.before.src}
                rightImage={service.after.src}
                leftImageAlt={`Before ${service.title}`}
                rightImageAlt={`After ${service.title}`}
              />
            </div>
            <p className="mt-2">{service.description}</p>
            <Link
              href={service.href}
              className="button btn-primary w-100 text-center"
              passHref
            >
              Learn More!
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Services;
