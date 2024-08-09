import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title:
    'Professional Exterior House Cleaning Services | Driveway Blasters',
  description:
    'Driveway Blasters provides expert exterior house cleaning services in Orange, Riverside, and Los Angeles Counties. Protect and enhance your home with our professional care. Contact us for a free estimate today!',
  openGraph: {
    title:
      'Professional Exterior House Cleaning Services | Driveway Blasters',
    description:
      'Driveway Blasters provides expert exterior house cleaning services in Orange, Riverside, and Los Angeles Counties. Protect and enhance your home with our professional care. Contact us for a free estimate today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/house-care',
    siteName: 'Driveway Blasters LLC',
    images: [
      {
        url: 'https://www.drivewayblasters.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Driveway Blasters LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Professional Exterior House Cleaning Services | Driveway Blasters',
    description:
      'Driveway Blasters provides expert exterior house cleaning services in Orange, Riverside, and Los Angeles Counties. Protect and enhance your home with our professional care. Contact us for a free estimate today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const HouseCare: React.FC = () => {
  return (
    <div className="container mt-2">
      <header>
        <h1 className="mb-3 text-center">
          <b>Professional Exterior House Washing Services</b>
        </h1>
        <p className="mb-4">
          Enhance and protect your home with Driveway Blasters LLC’s expert
          exterior house cleaning services, using advanced techniques to ensure
          your home in Orange, Riverside, and Los Angeles Counties is in
          pristine condition.
        </p>
      </header>

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-5" passHref>
          Get Your Free Quote!
        </Link>
      </div>

      <section>
        <h2 className="mb-1">
          <b>The Importance of Exterior House Cleaning</b>
        </h2>
        <p className="mb-4">
          Regular exterior house cleaning is essential for maintaining your
          home's appearance and structural integrity. Our house cleaning
          services provide several benefits:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Boost Your Home’s Curb Appeal:</b> A clean exterior enhances your
            home’s attractiveness and creates a welcoming environment.
          </li>
          <li className="mt-2">
            <b>Protect and Preserve Your Home’s Exterior:</b> Regular cleaning
            removes harmful dirt, grime, and organic growth, preventing damage
            and extending the lifespan of your home’s surfaces.
          </li>
          <li className="mt-2">
            <b>Create a Healthier Living Environment:</b> Removing mold, mildew,
            and allergens through exterior cleaning ensures a safe and healthy
            space for your family.
          </li>
          <li className="mt-2">
            <b>Increase Your Property’s Value:</b> Regular exterior cleaning
            boosts your home’s market value and appeal to potential buyers.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-1">
          <b>Comprehensive Exterior House Cleaning Services</b>
        </h2>
        <p className="mb-4">
          Our expert team offers a range of house cleaning services, including:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <a href="/exterior-house-washing" style={{ color: 'black' }}>
              <b>Exterior House Cleaning:</b>
            </a>{' '}
            Remove dirt, grime, and organic growth from your home's facade.
          </li>
          <li className="mt-2">
            <a href="/windows-solar-panels" style={{ color: 'black' }}>
              <b>Window Cleaning:</b>
            </a>{' '}
            Ensure your windows are spotless and streak-free.
          </li>
          <li className="mt-2">
            <a href="/gutter-cleaning" style={{ color: 'black' }}>
              <b>Gutter Cleaning:</b>
            </a>{' '}
            Clear debris from gutters to ensure proper drainage and prevent
            water damage.
          </li>
          <li className="mt-2">
            <a href="/deck-cleaning" style={{ color: 'black' }}>
              <b>Deck and Patio Cleaning:</b>
            </a>{' '}
            Restore and maintain the beauty and safety of your outdoor spaces.
          </li>
          <li className="mt-2">
            <b>Fence Cleaning:</b> Keep your fences looking new and prolong
            their lifespan.
          </li>
          <li className="mt-2">
            <a href="/driveway-cleaning" style={{ color: 'black' }}>
              <b>Driveway Cleaning:</b>
            </a>{' '}
            Eliminate stains, dirt, and grime, enhancing your home's overall
            appearance.
          </li>
        </ul>
        <p className="mb-4">
          Our comprehensive exterior house cleaning services are designed to
          address the unique needs of every home. Whether you’re dealing with
          tough stains, accumulated dirt, or organic growth like mold and algae,
          we have you covered.
        </p>

        <p className="mb-4">
          We understand that every home in Orange, Riverside, and Los Angeles
          Counties is different, which is why we customize our approach to
          ensure the most effective and efficient cleaning possible. From the
          delicate surfaces of your windows to the structure of your driveway,
          our team uses advanced pressure washing and soft washing techniques to
          achieve a deep, lasting clean.
        </p>
      </section>

      <section>
        <h2 className="mb-1">
          <b>Why Choose Driveway Blasters?</b>
        </h2>
        <ul className="mb-5 list-disc pl-5">
          <li className="mt-2">
            <b>Experienced Technicians:</b> Our team is skilled in advanced
            cleaning techniques, ensuring we can handle any challenge.
          </li>
          <li className="mt-2">
            <b>Eco-Friendly Solutions:</b> We use environmentally friendly
            cleaning products to protect your home and the surrounding
            environment.
          </li>
          <li className="mt-2">
            <b>Customer Satisfaction:</b> We are committed to providing
            excellent customer service and ensuring you are satisfied with the
            results.
          </li>
          <li className="mt-2">
            <b>Competitive Pricing:</b> Our rates are affordable and
            transparent, providing great value for your investment.
          </li>
          <li className="mt-2">
            <b>Reliable Service:</b> We show up on time and complete the job
            efficiently, respecting your schedule and property.
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <b>Our Eco-Friendly Approach</b>
        </h2>
        <p className="mb-4">
          At Driveway Blasters LLC, we are committed to protecting the
          environment. Our eco-friendly cleaning methods include:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Biodegradable Cleaning Products:</b> We use products that are
            safe for the environment and won’t harm your landscaping.
          </li>
          <li className="mt-2">
            <b>Water Conservation Techniques:</b> Our pressure washing systems
            are designed to use water efficiently, reducing waste while still
            providing a thorough clean.
          </li>
          <li className="mt-2">
            <b>Safe Disposal Practices:</b> We ensure that any waste generated
            during the cleaning process is disposed of responsibly.
          </li>
          <li className="mt-2">
            <b>Eco-Friendly Equipment:</b> Our tools and machines are chosen for
            their minimal environmental impact.
          </li>
        </ul>
      </section>

      <p className="mb-4">
        Ready to enhance and protect your home? Contact Driveway Blasters LLC
        for a free estimate and experience the difference our professional care
        can make.
      </p>

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-1" passHref>
          Get Your Free Quote!
        </Link>
      </div>

      <Testimonials />
    </div>
  );
};

export default HouseCare;
