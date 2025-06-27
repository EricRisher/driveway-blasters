'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ReactCompareImage from 'react-compare-image';

const services = [
  {
    title: 'Driveway Cleaning',
    description:
      "Tired of stubborn stains and a worn-out driveway? Our professional pressure washing restores your driveway's original look, removing grime, oil stains, and dirt quickly. Guaranteed results that boost your home's curb appeal and property value instantly.",
    before: '/images/drivewaydirty.webp',
    after: '/images/drivewayclean.webp',
    href: '/driveway-revival',
  },
  {
    title: 'Roof Cleaning',
    description:
      "Protect your roof and extend its life with professional soft wash cleaning! We safely eliminate moss, algae, and stains without damage, preventing costly repairs while enhancing your home's appearance.",
    before: '/images/roofbefore.webp',
    after: '/images/roofafter.webp',
    href: '/roof-cleaning',
  },
  {
    title: 'Deck Cleaning',
    description:
      "Transform your weathered deck into an outdoor oasis! Our professional pressure washing removes years of dirt, grime, and tough stains, restoring natural beauty and extending your deck's life. Enjoy your outdoor space again with guaranteed results.",
    before: '/images/deckbefore.webp',
    after: '/images/deckafter.webp',
    href: '/deck-cleaning',
  },
  {
    title: 'House Washing',
    description:
      "Boost your home's curb appeal and property value with professional house washing! Our soft wash method safely removes dirt, mold, and grime without damage, making your home look fresh and well-maintained.",
    before: '/images/housewashbefore.webp',
    after: '/images/housewashafter.webp',
    href: '/exterior-house-washing',
  },
  {
    title: 'Window Cleaning',
    description:
      "Crystal-clear windows transform your home's appearance and let in more natural light! Our professional streak-free cleaning removes years of buildup, enhances curb appeal, and keeps glass cleaner longer with expert techniques.",
    before: '/images/windowbefore.webp',
    after: '/images/windowafter.webp',
    href: '/window-clarity',
  },
  {
    title: 'Solar Panel Cleaning',
    description:
      'Maximize your solar investment and energy savings! Dust and debris can reduce efficiency by up to 30%. Our expert cleaning keeps panels performing at peak levels, protecting your investment while cutting energy costs and maximizing ROI.',
    before: '/images/solarpanelbefore.webp',
    after: '/images/solarpanelafter.webp',
    href: '/solar-panel-efficiency',
  },
  {
    title: 'Gutter Cleaning',
    description:
      "Don't let clogged gutters cause thousands in water damage! Our professional cleaning removes leaves, debris, and buildup that threatens your foundation, roof, and landscaping. ",
    before: '/images/beforegutters.webp',
    after: '/images/aftergutters.webp',
    href: '/gutter-cleaning',
  },
  {
    title: 'Brick Cleaning',
    description:
      'Restore the beauty of your brick surfaces with our expert efflorescence removal service. We  safely remove calcium deposits, salt stains, and white chalky buildup caused by water  on brick, stone, and concrete. Perfect for residential and commercial properties, our cleaning process eliminates deep stains without damaging your masonry.',
    before: '/images/brickdirty.jpg',
    after: '/images/brickclean.jpg',
    href: '/brick-cleaning',
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
        <h3 className="">
          <b>Licensed • Insured</b>
        </h3>
        <h2 className="services-h2">
          <b>
            The Best Exterior Cleaning Service in LA, Orange & Riverside County
          </b>
        </h2>
        <p className="services-summary text-start">
          At Driveway Blasters LLC, we help our residential and commercial
          customers across Orange, Riverside, and Los Angeles Counties. Our
          expert exterior cleaning services include pressure washing, soft
          washing, window cleaning, and more. From oil-stained driveways to
          moss-covered roofs and dusty solar panels, we guarantee you'll love
          our results!
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
