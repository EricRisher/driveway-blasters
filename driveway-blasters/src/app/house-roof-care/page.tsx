'use server';

import React from 'react';
import Link from 'next/link';

const HouseAndRoofCare: React.FC = () => {
  return (
    <div className="container mt-3">
      <h2 className="mb-3">
        <b>Expert House and Roof Care</b>
      </h2>
      <p className="mb-4">
        Protect and enhance your home with Driveway Blasters LLC’s professional
        house and roof cleaning services. Serving Orange, Riverside, and Los
        Angeles Counties, we ensure quality results.
      </p>

      <h2 className="mb-3">
        <b>Safeguarding Your Investment</b>
      </h2>
      <p className="mb-4">
        Regular maintenance is key to protecting your investment. Our services:
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
      </ul>
      <p className="mb-4">
        Our specialized techniques ensure safe, effective treatment for all
        types of exterior materials.
      </p>

      <p className="mb-4">
        Ready to safeguard and beautify your home? Contact Driveway Blasters LLC
        for a free estimate and see the difference professional care can make.
      </p>
      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-5" passHref>
          Get Your Free Quote!
        </Link>
      </div>
    </div>
  );
};

export default HouseAndRoofCare;