import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title:
    'Expert Roof Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers professional roof cleaning services in Orange, Riverside, and Los Angeles Counties. Protect and extend the life of your roof with our expert care. Contact us for a free estimate today!',
  openGraph: {
    title:
      'Expert Roof Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers professional roof cleaning services in Orange, Riverside, and Los Angeles Counties. Protect and extend the life of your roof with our expert care. Contact us for a free estimate today!',
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
      'Expert Roof Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers professional roof cleaning services in Orange, Riverside, and Los Angeles Counties. Protect and extend the life of your roof with our expert care. Contact us for a free estimate today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
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
          Angeles Counties, we use advanced techniques and equipment to deliver
          outstanding results.
        </p>
      </header>

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
            <b>Prevent Water Damage:</b> Removing moss, algae, and debris helps
            prevent water from seeping into your roof, avoiding significant
            damage over time.
          </li>
          <li className="mt-2">
            <b>Improve Energy Efficiency:</b> A clean roof reflects sunlight
            better, helping to keep your home cooler in the summer and reducing
            energy costs.
          </li>
          <li className="mt-2">
            <b>Promote Health and Safety:</b> Eliminating mold, mildew, and
            other allergens from your roof creates a healthier environment for
            you and your family.
          </li>
          <li className="mt-2">
            <b>Increase Property Value:</b> Regular cleaning enhances your
            home's curb appeal, making it more attractive to potential buyers.
          </li>
          <li className="mt-2">
            <b>Extend Roof Life:</b> Proper maintenance can add years to the
            life of your roof, saving you money on early replacements.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3">
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
        Ready to protect and enhance your roof? Contact Driveway Blasters LLC
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

export default RoofCare;
