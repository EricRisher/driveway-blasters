import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title:
    'Professional Gutter Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert gutter cleaning services in Orange, Riverside, and Los Angeles Counties. Protect your property from water damage with our reliable and eco-friendly cleaning solutions. Get a free quote today!',
  openGraph: {
    title:
      'Professional Gutter Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert gutter cleaning services in Orange, Riverside, and Los Angeles Counties. Protect your property from water damage with our reliable and eco-friendly cleaning solutions. Get a free quote today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/gutters',
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
      'Professional Gutter Cleaning Services in Orange, Riverside, and LA | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert gutter cleaning services in Orange, Riverside, and Los Angeles Counties. Protect your property from water damage with our reliable and eco-friendly cleaning solutions. Get a free quote today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const Gutters: React.FC = () => {
  return (
    <div className="container mt-3">
      <h1 className="mb-3 text-center">
        <b>Professional Gutter Cleaning Services</b>
      </h1>
      <p className="lead mb-4">
        Driveway Blasters LLC provides top-tier gutter cleaning services across
        Orange, Riverside, and Los Angeles Counties. Emphasizing safety and
        efficiency, our team delivers exceptional cleaning without the hassle of
        doing it yourself.
      </p>

      <Link href="/contact" className="button btn-primary mb-5" passHref>
        Get Your Free Quote!
      </Link>

      <h2 className="mb-3">
        <b>Protect Your Property with Expert Gutter Cleaning</b>
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="mt-2">
          <b>Avoid Water Damage:</b> Our cleaning prevents overflow, protecting
          your roof, siding, and foundation from water damage.
        </li>
        <li className="mt-2">
          <b>Enhance Your Home's Curb Appeal:</b> Maintain your property’s value
          and aesthetic with clean, functional gutters.
        </li>
        <li className="mt-2">
          <b>Preventative Maintenance Saves Money:</b> Regular gutter
          maintenance ensures optimal condition, preventing expensive future
          repairs.
        </li>
        <li className="mt-2">
          <b>Eco-Friendly Cleaning Solutions:</b> Opt for sustainable cleaning
          with our environmentally friendly methods.
        </li>
        <li className="mt-2">
          <b>Prompt and Reliable Service:</b> Rely on our timely, efficient
          services that respect your schedule and property integrity.
        </li>
      </ul>

      <h2 className="mb-3">
        <b>Comprehensive Gutter Cleaning and Maintenance</b>
      </h2>
      <p className="mb-4">
        Clogged gutters can lead to water damage and foundation issues. Our
        comprehensive gutter cleaning services involve:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mt-2">
          Removing <b>leaves, debris, and obstructions</b> to ensure proper
          water flow.
        </li>
        <li className="mt-2">
          Inspecting and clearing downspouts to prevent water buildup and
          potential damage.
        </li>
        <li className="mt-2">
          Optional <b>gutter guard installation</b> to reduce future debris
          accumulation.
        </li>
      </ul>
      <p className="mb-4">
        Maintain your home’s health and prevent costly future repairs with our
        thorough gutter maintenance service.
      </p>

      <h2 className="mb-3">The Benefits of Regular Gutter Cleaning</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="mt-2">
          <b>Prevents Water Damage:</b> By ensuring proper water flow, we help
          prevent water from seeping into your roof and foundation, which can
          cause significant damage over time.
        </li>
        <li className="mt-2">
          <b>Reduces Pest Infestations:</b> Clean gutters reduce the likelihood
          of pests such as mosquitoes, rodents, and birds making their homes in
          the debris.
        </li>
        <li className="mt-2">
          <b>Extends Gutter Lifespan:</b> Regular maintenance prevents rust and
          corrosion, extending the life of your gutter system.
        </li>
        <li className="mt-2">
          <b>Improves Structural Integrity:</b> Clean gutters prevent excess
          weight and stress on your roofing system, maintaining the overall
          structural integrity of your home.
        </li>
      </ul>

      <h2 className="mb-3">
        <b>Why Choose Us For Professional Gutter Cleaning?</b>
      </h2>
      <p className="mb-4">
        Professional cleaning not only enhances the <b>curb appeal</b> of your
        property but also extends the life of your home’s exterior features.
        Regular maintenance prevents the buildup of harmful materials that can
        lead to expensive repairs, ensuring your property remains a welcoming
        and safe space.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mt-2">
          <b>Experienced Technicians:</b> Our team is proficient in advanced
          cleaning techniques, ensuring your windows and solar panels are
          spotless.
        </li>
        <li className="mt-2">
          <b>Eco-Friendly Solutions:</b> We use biodegradable cleaning products
          that are safe for your home and the environment.
        </li>
        <li className="mt-2">
          <b>Customer Satisfaction:</b> We are dedicated to delivering
          exceptional customer service and ensuring you are thrilled with the
          results.
        </li>
        <li className="mt-2">
          <b>Affordable Pricing:</b> Our rates are competitive and transparent,
          providing excellent value for your investment.
        </li>
        <li className="mt-2">
          <b>Reliable Service:</b> We are punctual and efficient, completing the
          job on time while respecting your schedule and property
        </li>
      </ul>

      <section>
        <h2>
          <b>Our Eco-Friendly Approach</b>
        </h2>
        <p className="mb-4">
          At Driveway Blasters LLC, we are committed to protecting the
          environment. Our eco-friendly cleaning methods include:
        </p>
        <ul className="mb-5  list-disc pl-5">
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
        Don't let gutter issues compromise your home.{' '}
        <b>Contact Driveway Blasters LLC</b> today for professional cleaning and
        exceptional care.
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

export default Gutters;
