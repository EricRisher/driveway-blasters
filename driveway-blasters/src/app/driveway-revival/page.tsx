import type { Metadata } from 'next';
import React, { lazy } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Top-Rated Driveway Cleaning & Pressure Washing | Driveway Blasters',
  description:
    'Expert driveway cleaning services by Driveway Blasters LLC using advanced pressure washing techniques. Serving Riverside, LA, and Orange County. Enhance curb appeal and safety. Get a free quote today!',
  openGraph: {
    title: 'Top-Rated Driveway Cleaning & Pressure Washing | Driveway Blasters',
    description:
      'Expert driveway cleaning services by Driveway Blasters LLC using advanced pressure washing techniques. Serving Riverside, LA, and Orange County. Enhance curb appeal and safety. Get a free quote today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/driveway-deck-revival',
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
    title: 'Top-Rated Driveway Cleaning & Pressure Washing | Driveway Blasters',
    description:
      'Expert driveway cleaning services by Driveway Blasters LLC using advanced pressure washing techniques. Serving Riverside, LA, and Orange County. Enhance curb appeal and safety. Get a free quote today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const DrivewayRevival: React.FC = () => {
  return (
    <div className="container mt-3">
      <h2 className="mb-3 text-center">
        <b>Expert Driveway Cleaning Services</b>
      </h2>
      <p className="mb-4">
        At Driveway Blasters LLC, we specialize in professional driveway
        cleaning services, enhancing your property’s curb appeal across
        Riverside, Los Angeles, and Orange Counties. Our advanced pressure
        washing techniques remove stubborn stains, ensuring your driveway looks
        brand new.
      </p>

      <Image
        className="d-block w-50 items-center mx-auto mb-5 rounded-3"
        src="/images/sidebysidedriveway.png"
        alt="Professional Driveway Cleaning in Riverside County"
        width={2000}
        height={2000}
        loading="lazy"
      />

      <Link href="/contact" className="button btn-primary mb-5">
        Get Your Free Quote!
      </Link>

      <h2 className="mb-3">
        <b>Why Regular Driveway Cleaning Matters</b>
      </h2>
      <p className="mb-4">
        Regular cleaning of your driveway not only boosts curb appeal but also
        extends the lifespan of these surfaces. By preventing the accumulation
        of harmful materials, you can avoid costly repairs and maintain a
        beautiful, safe environment.
      </p>
      <p className="mb-4">
        Our professional cleaning services offer numerous benefits:
      </p>
      <ul className="mb-4 list-disc pl-5">
        <li className="mt-2">
          <b>Enhanced Safety:</b> Protect your family and guests by removing
          hazardous algae and mold, reducing the risk of slips and falls on your
          driveway.
        </li>
        <li className="mt-2">
          <b>Increase Property Value:</b> A clean, well-maintained driveway can
          significantly boost your home’s market value and curb appeal, making
          it more attractive to potential buyers.
        </li>

        <li className="mt-2">
          <b>Boost Driveway Durability:</b> Our professional cleaning services
          prevent costly damage and extend the lifespan of your driveway
          surfaces, saving you money over time.
        </li>
        <li className="mt-2">
          <b>Improved Aesthetics:</b> A spotless driveway not only enhances your
          property’s value but also creates a welcoming environment for family,
          guests, and customers.
        </li>
      </ul>

      <h2 className="mb-3">
        <b>Comprehensive Cleaning for All Impurities</b>
      </h2>
      <p className="mb-4">
        Our expert team can remove a wide range of impurities, including:
      </p>
      <ul className="mb-4 list-disc pl-5">
        <li className="mt-2">
          <b>Dangerous Algae Growth:</b> Keep your driveway safe and slip-free
          by eliminating harmful algae buildup.
        </li>
        <li className="mt-2">
          <b>Mold and Mildew:</b> Prevent health risks and surface damage by
          removing mold and mildew from your driveway.
        </li>
        <li className="mt-2">
          <b>Tough Oil and Vehicle Fluid Stains:</b> Restore your driveway’s
          appearance and prevent long-term damage with our expert cleaning
          services.
        </li>
        <li className="mt-2">
          <b>Rust and Mineral Deposits:</b> Protect your surfaces from etching
          and weakening caused by corrosive rust and mineral buildup.
        </li>
      </ul>
      <p className="mb-4">
        Our services are tailored to address these and other stubborn stains,
        restoring your driveway to their original condition.
      </p>

      <h2 className="mb-3">
        <b>Cleaning Services for All Types of Materials</b>
      </h2>
      <p className="mb-4">
        Our team is trained to clean a variety of materials, ensuring each type
        receives the appropriate care. We clean:
      </p>
      <ul className="mb-4 list-disc pl-5">
        <li className="mt-2">Concrete</li>
        <li className="mt-2">Asphalt</li>
        <li className="mt-2">Brick</li>
        <li className="mt-2">Stone</li>
        <li className="mt-2">Pavers</li>
        <li className="mt-2">Flagstone</li>
        <li className="mt-2">Wood</li>
      </ul>
      <p className="mb-4">
        Whether your paths are made of traditional concrete or upscale paver
        stones, our advanced cleaning techniques are{' '}
        <b>safe, effective, and tailored</b> to meet the specific needs of each
        material.
      </p>

      <section>
        <h2 className="mb-3">
          <b>Why Choose Driveway Blasters?</b>
        </h2>
        <ul className="mb-5 list-disc pl-5">
          <li className="mt-2">
            <b>Experienced Technicians:</b> Our team is proficient in advanced
            pressure washing techniques, ensuring we can tackle any driveway and
            deck cleaning challenge.
          </li>
          <li className="mt-2">
            <b>Eco-Friendly Solutions:</b> We use environmentally friendly
            cleaning products to protect your property and the surrounding
            environment.
          </li>
          <li className="mt-2">
            <b>Customer Satisfaction:</b> We are dedicated to delivering
            exceptional customer service and ensuring you are thrilled with the
            results.
          </li>
          <li className="mt-2">
            <b>Competitive Pricing:</b> Our rates are affordable and
            transparent, providing great value for your investment.
          </li>
          <li className="mt-2">
            <b>Reliable Service:</b> We are punctual and efficient, completing
            the job on time while respecting your schedule and property.
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <b>Our Eco-Friendly Cleaning Approach</b>
        </h2>
        <p className="mb-4">
          At Driveway Blasters LLC, we prioritize environmental sustainability.
          Our eco-friendly cleaning practices include:
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li className="mt-2">
            <b>Biodegradable Cleaning Products:</b> Our cleaning solutions are
            safe for the environment and will not harm your landscaping.
          </li>
          <li className="mt-2">
            <b>Water Conservation Methods:</b> Our pressure washing systems are
            designed to use water efficiently, minimizing waste while providing
            a thorough clean.
          </li>
          <li className="mt-2">
            <b>Responsible Waste Disposal:</b> We ensure that all waste
            generated during the cleaning process is disposed of in an
            environmentally responsible manner.
          </li>
          <li className="mt-2">
            <b>Eco-Friendly Equipment:</b> Our tools and machines are selected
            for their minimal environmental impact.
          </li>
        </ul>
      </section>

      <p className="mb-4">
        Contact Driveway Blasters LLC for a free quote and discover the impact
        of our professional driveway cleaning services. Our team is ready to
        help you achieve a pristine and safe outdoor space.
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

export default DrivewayRevival;
