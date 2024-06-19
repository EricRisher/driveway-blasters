import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title:
    'Expert House and Roof Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert house and roof cleaning services in Orange, Riverside, and Los Angeles Counties. Enhance and protect your home with our professional care. Contact us for a free estimate today!',
  openGraph: {
    title:
      'Expert House and Roof Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert house and roof cleaning services in Orange, Riverside, and Los Angeles Counties. Enhance and protect your home with our professional care. Contact us for a free estimate today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/house-and-roof-care',
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
      'Expert House and Roof Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert house and roof cleaning services in Orange, Riverside, and Los Angeles Counties. Enhance and protect your home with our professional care. Contact us for a free estimate today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const HouseAndRoofCare: React.FC = () => {
  return (
    <div className="container mt-3">
      <header>
        <h1 className="mb-3 text-center">
          <b>Expert House and Roof Care Services</b>
        </h1>
        <p className="mb-4">
          Protect and enhance your home with Driveway Blasters LLC’s
          professional house and roof cleaning services. Serving Orange,
          Riverside, and Los Angeles Counties, we ensure quality results using
          the best techniques and equipment.
        </p>
      </header>

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-5" passHref>
          Get Your Free Quote!
        </Link>
      </div>

      <section>
        <h2 className="mb-3">
          <b>The Importance of Roof and House Cleaning</b>
        </h2>
        <p className="mb-4">
          Keeping your roof and house clean is not just about aesthetics; it’s
          about maintaining the structural integrity of your property. A clean
          roof can:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Prevent water damage:</b> By removing moss, algae, and debris, we
            help prevent water from seeping into your roof, which can cause
            significant damage over time.
          </li>
          <li className="mt-2">
            <b>Improve energy efficiency:</b> A clean roof reflects sunlight
            better, helping to keep your home cooler in the summer and reducing
            energy costs.
          </li>
          <li className="mt-2">
            <b>Promote health and safety:</b> Removing mold, mildew, and other
            allergens from your roof and exterior surfaces creates a healthier
            environment for you and your family.
          </li>
          <li className="mt-2">
            <b>Increase property value:</b> Regular cleaning enhances your
            home's curb appeal, making it more attractive to potential buyers.
          </li>
          <li className="mt-2">
            <b>Extend roof life:</b> Proper maintenance can add years to the
            life of your roof, saving you money on early replacements.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3">
          <b>Safeguarding Your Investment</b>
        </h2>
        <p className="mb-4">
          Regular maintenance is key to protecting your investment. Our services
          include:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Extend the lifespan</b> of your roof and exterior surfaces,
            potentially saving thousands in future repairs.
          </li>
          <li className="mt-2">
            <b>Enhance curb appeal,</b> increasing your home’s market value and
            appeal to guests or potential buyers.
          </li>
          <li className="mt-2">
            <b>Prevent build-up</b> of harmful substances that can cause costly
            damage over time.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3">
          <b>Comprehensive Roof and Exterior Cleaning</b>
        </h2>
        <p className="mb-4">
          Prolong the life of your property with our services that include:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Moss and algae removal,</b> which can prevent shingle damage and
            leaks.
          </li>
          <li className="mt-2">
            <b>Soft washing of siding</b> to remove dirt, grime, and organic
            growth without damaging your home.
          </li>
          <li className="mt-2">
            <b>Fence cleaning services</b> to keep your fences looking new and
            prolong their lifespan.
          </li>
          <li className="mt-2">
            <b>Exterior house washing</b> to keep your home's facade spotless
            and well-maintained.
          </li>
          <li className="mt-2">
            <b>Deck and patio cleaning</b> to restore and maintain the beauty
            and safety of your outdoor spaces.
          </li>
          <li className="mt-2">
            <b>Driveway cleaning</b> to eliminate stains, dirt, and grime,
            enhancing your home's overall appearance.
          </li>
        </ul>
        <p className="mb-4">
          Our specialized techniques ensure safe, effective treatment for all
          types of exterior materials, including roofs, siding, decks, patios,
          fences, and driveways.
        </p>
      </section>

      <section>
        <h2 className="mb-3">
          <b>Why Choose Driveway Blasters?</b>
        </h2>
        <ul className="mb-5 list-disc pl-5">
          <li className="mt-2">
            <b>Experienced Technicians:</b> Our team is skilled in both
            high-pressure washing and soft washing techniques, ensuring we can
            handle any cleaning challenge.
          </li>
          <li className="mt-2">
            <b>Eco-Friendly Methods:</b> We use eco-friendly cleaning solutions
            to protect your home and the environment.
          </li>
          <li className="mt-2">
            <b>Customer Satisfaction:</b> We are committed to providing
            excellent customer service and ensuring you are satisfied with the
            results.
          </li>
          <li className="mt-2">
            <b>Affordable Pricing:</b> We offer competitive rates for all our
            services, providing excellent value for your investment.
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
            <b>Biodegradable cleaning solutions:</b> We use products that are
            safe for the environment and won’t harm your landscaping.
          </li>
          <li className="mt-2">
            <b>Water conservation techniques:</b> Our pressure washing systems
            are designed to use water efficiently, reducing waste while still
            providing a thorough clean.
          </li>
          <li className="mt-2">
            <b>Safe disposal practices:</b> We ensure that any waste generated
            during the cleaning process is disposed of responsibly.
          </li>
          <li className="mt-2">
            <b>Eco-friendly equipment:</b> Our tools and machines are chosen for
            their minimal environmental impact.
          </li>
        </ul>
      </section>

      <p className="mb-4">
        Ready to safeguard and beautify your home? Contact Driveway Blasters LLC
        for a free estimate and see the difference professional care can make.
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

export default HouseAndRoofCare;
