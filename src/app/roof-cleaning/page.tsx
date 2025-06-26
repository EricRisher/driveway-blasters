import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'Top-Rated Roof Cleaning Services | Driveway Blasters',
  description:
    'Driveway Blasters LLC provides expert roof cleaning services in Orange, Riverside, and Los Angeles Counties. Protect your roof and extend its lifespan with our professional care. Contact us for a free estimate today!',
  openGraph: {
    title:
      'Top-Rated Roof Cleaning Services | Driveway Blasters',
    description:
      'Driveway Blasters LLC provides expert roof cleaning services in Orange, Riverside, and Los Angeles Counties. Protect your roof and extend its lifespan with our professional care. Contact us for a free estimate today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/roof-care',
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
      'Top-Rated Roof Cleaning Services | Driveway Blasters',
    description:
      'Driveway Blasters LLC provides expert roof cleaning services in Orange, Riverside, and Los Angeles Counties. Protect your roof and extend its lifespan with our professional care. Contact us for a free estimate today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
  keywords: [
    'roof cleaning',
    'roof cleaning services',
    'roof cleaning near me',
    'roof cleaning in Orange County',
    'roof cleaning in Riverside County',
    'roof cleaning in Los Angeles County',
  ],
};

const RoofCare: React.FC = () => {
  return (
    <div className="container mt-3">
      <header>
        <h1 className="mb-3 text-center">
          <b>Professional Roof Cleaning Services</b>
        </h1>
        <p className="mb-4">
          Protect and extend the life of your roof with Driveway Blasters LLC’s
          expert roof cleaning services. Serving Orange, Riverside, and Los
          Angeles Counties, we provide top-notch professional roof maintenance
          using advanced techniques.
        </p>
      </header>

      <Image
        className="d-block w-50 items-center mx-auto mb-5 rounded-3"
        src="/images/beforeafterroof.jpg"
        alt="Professional Driveway Cleaning in Riverside County"
        width={2000}
        height={2000}
        loading="lazy"
      />

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-5" passHref>
          Get Your Free Quote!
        </Link>
      </div>

      <section>
        <h2 className="mb-3">
          <b>The Importance of Roof Cleaning</b>
        </h2>
        <p className="mb-4">
          Keeping your roof clean is essential for maintaining its structural
          integrity and appearance. Our roof cleaning services offer several
          benefits:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Prevent Water Damage with Professional Roof Cleaning:</b>{' '}
            Eliminate moss, algae, and debris to protect your roof from water
            infiltration and costly long-term damage.
          </li>
          <li className="mt-2">
            <b>Boost Energy Efficiency:</b> A clean roof reflects sunlight
            effectively, keeping your home cooler during summer and lowering
            energy bills.
          </li>
          <li className="mt-2">
            <b>Promote Health and Safety:</b> Removing mold, mildew, and
            allergens from your roof ensures a safer, healthier environment for
            your family.
          </li>
          <li className="mt-2">
            <b>Increase Your Home’s Value:</b> Regular roof cleaning boosts curb
            appeal, making your property more appealing to potential buyers.
          </li>
          <li className="mt-2">
            <b>Extend Your Roof’s Lifespan:</b> Proper maintenance can add years
            to the life of your roof, saving you money on early replacements.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-2">
          <b>Comprehensive Roof Cleaning Services</b>
        </h2>
        <p className="mb-4">
          Our expert team offers comprehensive roof cleaning services,
          including:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Moss and Algae Removal:</b> Prevent shingle damage and leaks by
            eliminating moss and algae.
          </li>
          <li className="mt-2">
            <b>Debris Clearing:</b> Remove leaves, branches, and other debris to
            ensure proper water drainage.
          </li>
          <li className="mt-2">
            <b>Stain Removal:</b> Get rid of unsightly stains caused by algae,
            mold, and other elements.
          </li>
          <li className="mt-2">
            <b>Soft Washing:</b> Our gentle cleaning method effectively cleans
            without damaging your roof.
          </li>
        </ul>
        <p className="mb-4">
          Our services are designed to address all your roof cleaning needs,
          ensuring your roof remains in top condition.
        </p>
      </section>

      <section>
        <h2 className="mb-3">
          <b>Why Choose Driveway Blasters?</b>
        </h2>
        <ul className="mb-5 list-disc pl-5">
          <li className="mt-2">
            <b>Experienced Technicians:</b> Our team is skilled in advanced roof
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
        Ready to protect and enhance your roof? With Driveway Blasters LLC,
        you’re not just getting a roof cleaning service you’re investing in the
        longevity and safety of your home. Whether you’re preparing your home
        for sale, addressing potential issues, or simply maintaining its beauty,
        our comprehensive roof care services are tailored to meet your specific
        needs. Don’t wait until problems arise; contact us today for a free
        estimate and discover how our professional care can make a lasting
        difference to your home’s value and safety.
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

export default RoofCare;
