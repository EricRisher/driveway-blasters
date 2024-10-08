'use client';

import Image from 'next/image';
import Link from 'next/link';
import check from '../../public/icons/check.png';

const features = [
  {
    id: 1,
    description:
      'Expert Pressure Washing Services: Ready for any challenge.',
  },
  {
    id: 2,
    description:
      "Guaranteed satisfaction: We're not happy with the job until you are!",
  },
  {
    id: 3,
    description:
      'Fast and Easy Quotes: Obtain quick and precise estimates online.',
  },
  {
    id: 4,
    description: 'Transparent Pricing: Consistent pricing online or in-person.',
  },
  {
    id: 5,
    description:
      'Eco-Friendly Methods: Safely clean and protect the environment.',
  },
];

function WhyChooseUs() {
  return (
    <div className="service-wrapper">
      <div className="service-text-container">
        <h2>
          <b>Why Choose Driveway Blasters for Your Pressure Washing Needs?</b>
        </h2>

        <div className="service-features mt-3">
          {features.map((feature) => (
            <div key={feature.id} className="service-feature ">
              <Image src={check} alt="checkmark" width={20} height={20} />
              <p className="service-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        <section className="d-flex flex-column align-items-center pt-4">
          <p>
            At{' '}
            <a
              href="https://maps.app.goo.gl/qxdnroFKMHc771PNA"
              className="fw-bold text-blue-600"
            >
              Driveway Blasters LLC
            </a>
            , we’re not just another pressure washing service. We pride
            ourselves on being the best priced and highest quality in your
            county. Whether it’s{' '}
            <a href="/driveway-revival" className="fw-bold text-blue-600">
              driveways,
            </a>{' '}
            <a href="/deck-cleaning" className="fw-bold text-blue-600">
              decks,
            </a>{' '}
            <a href="/exterior-house-washing" className="fw-bold text-blue-600">
              house exteriors,
            </a>{' '}
            <a href="/roof-cleaning" className="fw-bold text-blue-600">
              roofs,
            </a>{' '}
            <a href="/window-clarity" className="fw-bold text-blue-600">
              windows,
            </a>{' '}
            <a href="/solar-panel-efficiency" className="fw-bold text-blue-600">
              solar panels,
            </a>
            {' or '}
            <a href="/gutter-cleaning" className="fw-bold text-blue-600">
              gutters
            </a>{' '}
            we tackle every challenge with expertise and a smile.{' '}
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
