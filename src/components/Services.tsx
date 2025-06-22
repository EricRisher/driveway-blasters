'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ReactCompareImage from 'react-compare-image';

const services = [
  {
    title: 'Driveway Revival',
    description:
      'Tired of stubborn stains and a worn-out driveway? Our professional pressure washing restores your driveway’s original look, removing grime, oil stains, and dirt in no time.',
    before: '/images/drivewaybefore.webp',
    after: '/images/drivewayafter.webp',
    href: '/driveway-revival',
  },
  {
    title: 'Deck Cleaning',
    description: `Is your deck in need of a thorough cleaning? Our team effectively removes dirt, grime, and tough stains. With our expert deck cleaning services, we'll revitalize your outdoor area, significantly improving its look and durability. Enjoy a fresh, clean deck without the hassle.`,
    before: '/images/deckbefore.webp',
    after: '/images/deckafter.webp',
    href: '/deck-cleaning',
  },
  {
    title: 'Exterior House Washing',
    description:
      'A cleaner home exterior boosts curb appeal and property value. Our soft wash method safely removes dirt, mold, and grime, making your home look fresh and well-maintained.',
    before: '/images/housewashbefore.webp',
    after: '/images/housewashafter.webp',
    href: '/exterior-house-washing',
  },
  {
    title: 'Roof Cleaning',
    description:
      'Protect your roof and extend its life! Our soft wash service eliminates moss, algae, and stains without damage, keeping your home looking great while preventing costly repairs.',
    before: '/images/roofbefore.webp',
    after: '/images/roofafter.webp',
    href: '/roof-cleaning',
  },
  {
    title: 'Window Clarity',
    description:
      'Dirty windows ruin a view. Our streak-free window cleaning brightens your home, removes buildup, and helps glass stay cleaner longer even after rain.',
    before: '/images/windowbefore.webp',
    after: '/images/windowafter.webp',
    href: '/window-clarity',
  },
  {
    title: 'Solar Panel Efficiency',
    description:
      'Maximize your solar power! Dust and dirt can reduce efficiency by up to 30%. Our expert cleaning keeps your panels performing at peak levels, saving you money.',
    before: '/images/solarpanelbefore.webp',
    after: '/images/solarpanelafter.webp',
    href: '/solar-panel-efficiency',
  },
  {
    title: 'Gutter Cleaning',
    description:
      'Clogged gutters lead to costly damage. We clear out leaves, debris, and buildup, keeping your gutters flowing properly and protecting your home from water damage.',
    before: '/images/beforegutters.webp',
    after: '/images/aftergutters.webp',
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
    <div className="services-container mt-8" id="Services">
      <div className="services-wrapper">
        <h2 className="services-h1">
          <b>Explore Our Comprehensive Exterior Cleaning Services</b>
        </h2>
        <p className="services-summary text-start">
          At Driveway Blasters LLC, we revitalize residential and commercial
          properties across Orange, Riverside, and Los Angeles Counties. Our
          expert exterior cleaning services include pressure washing, soft
          washing, window cleaning, and more. From oil-stained driveways to
          moss-covered roofs and dusty solar panels, we remove dirt, grime, and
          buildup that boosts your curb appeal and extends the life of your
          surfaces.
        </p>
      </div>

      <div className="services">
        {services.map((service, index) => (
          <section className="service" key={index}>
            <h2>
              <b>{service.title}</b>
            </h2>
            <div className="imageWrapper">
              <ReactCompareImage
                leftImage={service.before}
                rightImage={service.after}
                leftImageAlt={`Before ${service.title}`}
                rightImageAlt={`After ${service.title}`}
              />
            </div>
            <p className="mt-2">{service.description}</p>
            <Link
              href={service.href}
              className="button btn-primary services-btn w-100 text-center"
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
