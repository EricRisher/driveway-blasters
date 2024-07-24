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

import deckBefore from '../../public/images/deckbefore.png';
import deckAfter from '../../public/images/deckafter.png';

import roofBefore from '../../public/images/roofbefore.png';
import roofAfter from '../../public/images/roofafter.png';

import solarPanelBefore from '../../public/images/solarpanelbefore.png';
import solarPanelAfter from '../../public/images/solarpanelafter.png';

const services = [
  {
    title: 'Driveway Revival',
    description:
      "Don't have the right tools or time? Our specialized high-quality equipment and expertise can handle even the toughest stains. Our commercial pressure washing services will rejuvenate your driveway, making it look like new.",
    before: drivewayBefore,
    after: drivewayAfter,
    href: '/driveway-revival',
  },
  {
    title: 'Deck Cleaning',
    description:
      "Is your deck in need of a thorough cleaning? Our team effectively removes dirt, grime, and tough stains. With our expert deck cleaning services, we'll revitalize your outdoor area, significantly improving its look and durability. Enjoy a fresh, clean deck without the hassle.",
    before: deckBefore,
    after: deckAfter,
    href: '/deck-cleaning',
  },
  {
    title: 'Exterior House Washing',
    description:
      "Is your home's exterior looking dull and weathered? Maintaining a clean house exterior is essential for preserving your home's value and curb appeal. Trust us to bring a fresh, revitalized look to your property, enhancing its beauty and longevity.",
    before: housewashBefore,
    after: housewashAfter,
    href: '/exterior-house-washing',
  },
  {
    title: 'Roof Cleaning',
    description:
      'Cleaning your roof is never an easy job but, that’s why you should trust us to bring your home a top-to-bottom shine! Our soft wash services are tailored to protect your home!',
    before: roofBefore,
    after: roofAfter,
    href: '/roof-cleaning',
  },
  {
    title: 'Window Clarity',
    description:
      'With our advanced and thorough cleaning of window sills, frames, and tracks not only delivers a brilliant reflective shine but also ensures lasting cleanliness that resists the first signs of rain.',
    before: windowBefore,
    after: windowAfter,
    href: '/window-clarity',
  },
  {
    title: 'Solar Panel Efficiency',
    description:
      'Keep your solar panels clean to boost their performance and efficiency. Our specialized cleaning services remove dirt and grime, ensuring your panels operate at peak efficiency.',
    before: solarPanelBefore,
    after: solarPanelAfter,
    href: '/solar-panel-efficiency',
  },

  {
    title: 'Gutter Cleaning',
    description:
      "Without regularly cleaned gutters they won't function properly and will lead to costly repairs. So let us leave you with clean, good-looking, and functional gutters.",
    before: guttersBefore,
    after: guttersAfter,
    href: '/gutter-cleaning',
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
