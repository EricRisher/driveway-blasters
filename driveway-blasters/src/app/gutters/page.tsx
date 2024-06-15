'use server';

import React from 'react';
import Link from 'next/link';

const Gutters: React.FC = () => {
  return (
    <div className="container mt-3">
      <h1 className="mb-4 text-center">
        <b>Gutter Cleaning Services</b>
      </h1>
      <p className="lead mb-4">
        Driveway Blasters LLC provides <b>top-tier</b> gutter cleaning services
        across Orange, Riverside, and Los Angeles County. Emphasizing{' '}
        <b>safety</b> and <b>efficiency</b>, our team delivers{' '}
        <b>exceptional</b> cleaning without the hassle of doing it yourself.
      </p>

      <h2 className="mb-3">
        <b>Protect your property with Expert Gutter Cleaning</b>
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
        <b>Gutter Cleaning and Maintenance</b>
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

      <p className="mb-4">
        Don't let gutter issues compromise your home.{' '}
        <b>Contact Driveway Blasters LLC</b> today for professional cleaning and
        exceptional care.
      </p>

      <h2 className="mb-3">
        <b>Why Professional Cleaning?</b>
      </h2>
      <p className="mb-4">
        Professional cleaning helps not only in enhancing the <b>curb appeal</b>{' '}
        but also in extending the life of your property’s external features.
        Regular maintenance prevents the buildup of harmful materials that can
        lead to expensive repairs, ensuring that your property remains a
        welcoming and safe space.
      </p>

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-5" passHref>
          Get Your Free Quote!
        </Link>
      </div>
    </div>
  );
};

export default Gutters;
