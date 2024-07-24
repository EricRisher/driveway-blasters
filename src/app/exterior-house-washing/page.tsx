import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title:
    'Expert Exterior House Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert exterior house cleaning services in Orange, Riverside, and Los Angeles Counties. Enhance and protect your home with our professional care. Contact us for a free estimate today!',
  openGraph: {
    title:
      'Expert Exterior House Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert exterior house cleaning services in Orange, Riverside, and Los Angeles Counties. Enhance and protect your home with our professional care. Contact us for a free estimate today!',
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
      'Expert Exterior House Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert Exterior house cleaning services in Orange, Riverside, and Los Angeles Counties. Enhance and protect your home with our professional care. Contact us for a free estimate today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const HouseCare: React.FC = () => {
  return (
    <div className="container mt-3">
      <header>
        <h1 className="mb-3 text-center">
          <b>Professional Exterior House Washing Services</b>
        </h1>
        <p className="mb-4">
          Enhance and protect your home with Driveway Blasters LLC’s expert
          house cleaning services. Serving Orange, Riverside, and Los Angeles
          Counties, we use advanced techniques and equipment to deliver superior
          results.
        </p>
      </header>

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-5" passHref>
          Get Your Free Quote!
        </Link>
      </div>

      <section>
        <h2 className="mb-3">
          <b>The Importance of Exterior House Cleaning</b>
        </h2>
        <p className="mb-4">
          Regular exterior house cleaning is essential for maintaining your
          home's appearance and structural integrity. Our house cleaning
          services provide several benefits:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Boost Curb Appeal:</b> A clean exterior makes your home more
            attractive and welcoming.
          </li>
          <li className="mt-2">
            <b>Protect Surfaces:</b> Removing dirt, grime, and organic growth
            prevents damage and extends the life of your home's exterior.
          </li>
          <li className="mt-2">
            <b>Healthier Environment:</b> Eliminating mold, mildew, and
            allergens creates a healthier living space for you and your family.
          </li>
          <li className="mt-2">
            <b>Increase Property Value:</b> Regular cleaning enhances your
            home's value, making it more appealing to potential buyers.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3">
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
          Our services are tailored to meet the specific needs of your home's
          exterior, ensuring a thorough and effective clean.
        </p>
      </section>

      <section>
        <h2 className="mb-3">
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
