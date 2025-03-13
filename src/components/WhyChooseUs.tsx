'use client';

import Image from 'next/image';
import Link from 'next/link';
import check from '../../public/icons/check.png';

const features = [
  {
    id: 1,
    description:
      'Expert Cleaning, Every Time: We tackle any job with precision and care.',
  },
  {
    id: 2,
    description:
      'Satisfaction Guaranteed: We’re not happy with the job until you are. ',
  },
  {
    id: 3,
    description:
      'Quick & Easy Quotes: Get fast, accurate estimates with no hassle.',
  },
  {
    id: 4,
    description:
      'Upfront Pricing: No hidden fees, what you see is what you pay.',
  },
  {
    id: 5,
    description:
      'Eco-Friendly Cleaning: Tough on stains yet safe for the planet.',
  },
];

function WhyChooseUs() {
  return (
    <div className="service-wrapper">
      <div className="service-text-container">
        <h2>
          <b>Why Choose Us?</b>
        </h2>

        <div className="service-features mt-3">
          {features.map((feature) => (
            <div key={feature.id} className="service-feature ">
              <Image src={check} alt="checkmark" width={20} height={20} />
              <p className="service-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        <section className="d-flex flex-column pt-4 text-start">
          <p>
            At{' '}
            <a
              href="https://maps.app.goo.gl/qxdnroFKMHc771PNA"
              className="fw-bold text-gray-900"
            >
              Driveway Blasters LLC
            </a>
            , we do more than just pressure washing. We restore, protect, and
            enhance your property. Whether it’s{' '}
            <a href="/driveway-revival" className="fw-bold text-gray-900">
              driveways
            </a>
            ,{' '}
            <a href="/deck-cleaning" className="fw-bold text-gray-900">
              decks
            </a>
            ,{' '}
            <a href="/exterior-house-washing" className="fw-bold text-gray-900">
              house exteriors
            </a>
            ,{' '}
            <a href="/roof-cleaning" className="fw-bold text-gray-900">
              roofs
            </a>
            ,{' '}
            <a href="/window-clarity" className="fw-bold text-gray-900">
              windows
            </a>
            ,{' '}
            <a href="/solar-panel-efficiency" className="fw-bold text-gray-900">
              solar panels
            </a>
            , or{' '}
            <a href="/gutter-cleaning" className="fw-bold text-gray-900">
              gutters
            </a>
            , we tackle every job with precision and care. Quality service,
            unbeatable pricing, and a commitment to customer satisfaction set us
            apart.
          </p>
          <Link
            href="/contact"
            className="button btn-primary mt-3 mb-4"
            passHref
          >
            Get Your Free Quote!
          </Link>
        </section>
      </div>
    </div>
  );
}

export default WhyChooseUs;
