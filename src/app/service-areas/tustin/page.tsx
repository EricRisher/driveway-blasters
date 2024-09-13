import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Breadcrumb from '@/components/Breadcrumb'; // Import the Breadcrumb component
import image from '../../../../public/images/hero3.jpeg';

export const metadata: Metadata = {
  title:
    'Top-Rated Pressure Washing Services in Tustin | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert pressure washing services in Tustin. Keep your property clean and vibrant with our eco-friendly solutions. Contact us today for a free quote!',
  openGraph: {
    title:
      'Top-Rated Pressure Washing Services in Tustin | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in Tustin. Keep your property clean and vibrant with our eco-friendly solutions. Contact us today for a free quote!',
    type: 'website',
    locale: 'en_US',
    url: `https://www.drivewayblasters.com/service-areas/tustin`,
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
      'Top-Rated Pressure Washing Services in Tustin | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in Tustin. Keep your property clean and vibrant with our eco-friendly solutions. Contact us today for a free quote!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const ServiceAreaPage: React.FC = () => {
  const city = 'Tustin'; 

  return (
    <div className="container mt-3">
      <Breadcrumb city={city} />

      <h1 className="mb-3 text-center text-4xl font-bold">
        Pressure Washing & Soft Washing Services in {city}
      </h1>
      <div className="container flex flex-col lg:flex-row">
        <div className="mb-4 flex-grow">
          <p>
            At Driveway Blasters LLC, we proudly serve the residents and
            businesses of <b>{city}, CA</b>, with our top-rated pressure washing
            and soft washing services. Known for its rich history and charming
            neighborhoods, Tustin homes and businesses deserve to stay as
            pristine as the community itself. Whether you're in the historic
            area of <b>Old Town Tustin</b> or the modern developments of{' '}
            <b>Tustin Ranch</b>, we’re here to keep your property looking its
            best.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Trusted local professionals serving Tustin for years.</li>
            <li>
              Eco-friendly pressure washing techniques for homes and businesses.
            </li>
            <li>
              Safe and effective cleaning solutions that protect your property
              and the environment.
            </li>
          </ul>
          <Link
            href="/contact"
            className="button btn-primary mt-5 inline-block"
          >
            Get Your Free Quote!
          </Link>
        </div>
        <Image
          className="w-full lg:w-1/2 mb-5 rounded-3 p-5"
          src={image}
          alt={`Professional Pressure Washing Services in ${city}`}
          width={1000}
          height={667}
          loading="lazy"
        />
      </div>

      {/* Expanded Service Descriptions */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Our Pressure Washing Services in {city}
        </h2>
        <p>
          From homes in the scenic hills of <b>Tustin Ranch</b> to commercial
          properties along <b>Newport Avenue</b>, our services are tailored to
          keep your property clean and well-maintained. Our eco-friendly
          pressure washing techniques will remove the dirt, grime, and
          pollutants that accumulate over time, preserving the value and
          appearance of your property.
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Driveway Cleaning:</b> Remove oil stains, dirt, and debris from
            your driveway for a safer, more appealing entrance to your home.
          </li>
          <li className="mt-2">
            <b>Roof Soft Washing:</b> Safely clean your roof without damaging
            shingles or tiles, perfect for Tustin’s varied home styles.
          </li>
          <li className="mt-2">
            <b>Window Cleaning:</b> Keep your windows sparkling, letting more
            natural light into your home or business.
          </li>
          <li className="mt-2">
            <b>Graffiti Removal:</b> Swift and safe graffiti removal for
            commercial and residential properties.
          </li>
          <li className="mt-2">
            <b>Commercial Pressure Washing:</b> Maintain a clean, inviting
            appearance for your business, from storefronts to parking lots.
          </li>
        </ul>
      </section>

      {/* Why Choose Driveway Blasters */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Why Choose Driveway Blasters in Tustin?
        </h2>
        <p>
          Tustin, CA, is a city that blends history with modern living, and
          maintaining the appearance of your property is crucial. At Driveway
          Blasters LLC, we understand the unique environmental factors that
          affect homes and businesses in the area, such as dust from nearby
          traffic and seasonal pollen. Here’s why we’re the go-to choice for
          pressure washing in Tustin:
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Local Experts:</b> We know Tustin’s neighborhoods well, from the
            classic homes in <b>Old Town Tustin</b> to the newer developments in{' '}
            <b>Tustin Legacy</b>.
          </li>
          <li className="mt-2">
            <b>Experienced Technicians:</b> Our team has years of experience in
            providing professional pressure washing and soft washing services,
            ensuring your property is cleaned safely and effectively.
          </li>
          <li className="mt-2">
            <b>Eco-Friendly Solutions:</b> We use environmentally friendly
            products that are safe for your family, pets, and landscaping.
          </li>
          <li className="mt-2">
            <b>Affordable and Transparent Pricing:</b> We offer competitive
            rates with no hidden fees, providing value and quality every time.
          </li>
        </ul>
      </section>

      {/* Soft Washing vs Pressure Washing */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Soft Washing vs Pressure Washing: What’s the Difference?
        </h2>
        <p>
          Depending on the surface, we offer both pressure washing and soft
          washing to achieve the best results for your property in Tustin. While
          both methods are effective, they serve different purposes.
        </p>
        <h3 className="text-2xl font-semibold mt-4">
          Pressure Washing: High-Pressure Cleaning for Hard Surfaces
        </h3>
        <p className="mt-2">
          Pressure washing is perfect for tough surfaces that can handle
          high-pressure water, such as:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>Concrete driveways and walkways</li>
          <li>Patios and decks</li>
          <li>Sidewalks and parking lots</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Soft Washing: Gentle Cleaning for Delicate Surfaces
        </h3>
        <p className="mt-2">
          Soft washing uses low-pressure water combined with cleaning solutions
          to gently clean surfaces like:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>Roofs</li>
          <li>Siding and stucco</li>
          <li>Windows and glass surfaces</li>
        </ul>

        <p className="mt-4">
          Contact us to learn which method is best for your Tustin property.
        </p>
      </section>

      {/* Window and Solar Panel Cleaning */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Window and Solar Panel Cleaning in Tustin
        </h2>
        <p>
          Keeping your windows and solar panels clean is essential in sunny
          Tustin, where maximizing energy efficiency and enjoying natural light
          are key. Our window and solar panel cleaning services ensure your home
          or business looks great and operates efficiently.
        </p>

        <h3 className="text-2xl font-semibold mt-4">
          Benefits of Professional Window Cleaning
        </h3>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Improved Curb Appeal:</b> Clean windows create a welcoming
            atmosphere for your home or business.
          </li>
          <li>
            <b>Extended Window Lifespan:</b> Regular cleaning removes harmful
            debris, preventing long-term damage.
          </li>
          <li>
            <b>Healthier Environment:</b> Clean windows let in more natural
            light, reducing the need for artificial lighting.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Solar Panel Cleaning: Maximize Efficiency
        </h3>
        <p className="mt-2">
          Dust and debris on your solar panels can reduce efficiency by up to
          30%. Our solar panel cleaning services help you maximize energy
          production and save money on energy bills.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Boost Energy Production:</b> Clean panels absorb more sunlight
            and generate more electricity.
          </li>
          <li>
            <b>Extend Panel Lifespan:</b> Regular cleaning prevents buildup that
            can damage your panels over time.
          </li>
          <li>
            <b>Save on Energy Bills:</b> Maximized efficiency means lower
            utility bills and faster returns on your solar investment.
          </li>
        </ul>

        <p className="mt-4">
          Contact us today for professional window or solar panel cleaning in
          Tustin, and let us help you enjoy the full benefits of your
          investment.
        </p>
      </section>

      <Testimonials />

      {/* About Tustin */}
      <div className="text-center mt-10 mb-20">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Improve Your Property in Tustin?
        </h3>
        <p className="mb-4">
          Whether you're looking for residential or commercial pressure washing
          services in Tustin, Driveway Blasters LLC has the expertise to deliver
          exceptional results.
        </p>
        <Link href="/contact" className="button btn-primary mt-4">
          Get Your Free Estimate Today!
        </Link>

        <h2 className="font-bold mt-10 text-left">About Tustin, CA</h2>
        <p className="mt-4 text-left">
          Known as the "City of Trees," Tustin boasts a mix of historic charm
          and modern amenities. From the tree-lined streets of{' '}
          <b>Old Town Tustin</b> to the scenic views of <b>Tustin Ranch</b>,
          this community offers something for everyone. With a history dating
          back to the late 1800s and proximity to Orange County’s booming
          economy, Tustin is a prime location for homeowners and businesses
          alike. Maintaining your property’s exterior in this beautiful city is
          essential for preserving its charm and value.
        </p>
        <p className="mt-4 text-left">
          Whether you're strolling through <b>Peppertree Park</b> or enjoying
          the shops at <b>The District at Tustin Legacy</b>, you'll notice that
          Tustin’s residents take pride in their homes and businesses. That’s
          why we’re proud to offer top-tier pressure washing services that help
          keep Tustin properties looking their best year-round.
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaPage;
