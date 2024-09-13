import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Breadcrumb from '@/components/Breadcrumb'; // Import the Breadcrumb component
import image from '../../../../public/images/hero3.jpeg';

export const metadata: Metadata = {
  title:
    'Top-Rated Pressure Washing Services in San Clemente | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert pressure washing services in San Clemente. Boost your property’s curb appeal with our eco-friendly cleaning solutions. Contact us for a free quote!',
  openGraph: {
    title:
      'Top-Rated Pressure Washing Services in San Clemente | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in San Clemente. Boost your property’s curb appeal with our eco-friendly cleaning solutions. Contact us for a free quote!',
    type: 'website',
    locale: 'en_US',
    url: `https://www.drivewayblasters.com/service-areas/san-clemente`,
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
      'Top-Rated Pressure Washing Services in San Clemente | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in San Clemente. Boost your property’s curb appeal with our eco-friendly cleaning solutions. Contact us for a free quote!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const ServiceAreaPage: React.FC = () => {
  const city = 'San Clemente'; // Define the city for the current page

  return (
    <div className="container mt-3">
      {/* Add the breadcrumb component here */}
      <Breadcrumb city={city} />

      <h1 className="mb-3 text-center text-4xl font-bold">
        Pressure Washing & Soft Washing Services in {city}
      </h1>
      <div className="container flex flex-col lg:flex-row">
        <div className="mb-4 flex-grow">
          <p>
            Welcome to Driveway Blasters LLC, your trusted source for
            professional pressure washing services in <b>{city}, CA</b>. Known
            for its stunning coastal views and Spanish-style architecture, San
            Clemente homes and businesses deserve to look their best year-round.
            Whether you're in the heart of <b>San Clemente Pier Bowl</b> or the
            rolling hills of <b>Talega</b>, our eco-friendly pressure washing
            services are designed to keep your property clean and
            well-maintained.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Friendly, local experts serving the San Clemente community.</li>
            <li>
              Safe and effective pressure washing techniques for all surfaces.
            </li>
            <li>
              Environmentally conscious cleaning solutions that protect your
              property and the coastal ecosystem.
            </li>
          </ul>
          <Link
            href="/contact"
            className="button btn-primary mt-5 inline-block"
          >
            Get Your Free Quote Today!
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
          We offer a wide range of pressure washing services for both
          residential and commercial properties in San Clemente. Whether you're
          a homeowner near <b>Las Palmas</b> or running a business in the
          bustling <b>Downtown San Clemente</b>, our professional cleaning
          services will revitalize your property and protect it from coastal
          elements like salt and sand buildup.
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Driveway Cleaning:</b> Remove oil stains, dirt, and grime from
            your driveway and restore its original appearance.
          </li>
          <li className="mt-2">
            <b>Roof Soft Washing:</b> Gently clean your roof without damaging
            shingles, removing mold, algae, and debris that accumulate over
            time.
          </li>
          <li className="mt-2">
            <b>Window Cleaning:</b> Keep your windows sparkling and free from
            streaks, allowing natural light to brighten your home.
          </li>
          <li className="mt-2">
            <b>Graffiti Removal:</b> Efficient and safe graffiti removal to keep
            your property looking pristine.
          </li>
          <li className="mt-2">
            <b>Commercial Pressure Washing:</b> Maintain the cleanliness and
            curb appeal of your business, from storefronts to parking lots.
          </li>
        </ul>
      </section>

      {/* Why Choose Driveway Blasters */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Why Choose Driveway Blasters in San Clemente?
        </h2>
        <p>
          At Driveway Blasters LLC, we understand the unique challenges of
          maintaining properties in a coastal city like San Clemente. From the
          salt air to the heavy traffic near tourist attractions, your property
          is constantly exposed to wear and tear. Here’s why San Clemente
          residents trust us with their pressure washing needs:
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Local Expertise:</b> We know the specific challenges that come
            with maintaining coastal properties, from saltwater corrosion to
            sand buildup, and tailor our services to meet these needs.
          </li>
          <li className="mt-2">
            <b>Experienced Technicians:</b> Our team is highly trained in both
            pressure washing and soft washing techniques, ensuring your surfaces
            are cleaned thoroughly without damage.
          </li>
          <li className="mt-2">
            <b>Environmentally Friendly:</b> We use eco-friendly cleaning
            products that are safe for your property and the local environment,
            particularly important in a coastal area like San Clemente.
          </li>
          <li className="mt-2">
            <b>Competitive Pricing:</b> We offer transparent, affordable pricing
            for all our services, ensuring that you receive exceptional value.
          </li>
        </ul>
      </section>

      {/* Soft Washing vs Pressure Washing */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Soft Washing vs Pressure Washing: What’s the Difference?
        </h2>
        <p>
          Whether you need soft washing or pressure washing depends on the
          surface being cleaned. Both methods are effective in removing dirt,
          grime, and buildup, but they serve different purposes.
        </p>
        <h3 className="text-2xl font-semibold mt-4">
          Pressure Washing: Ideal for Tough Surfaces
        </h3>
        <p className="mt-2">
          Pressure washing uses high-powered water to clean durable surfaces
          like driveways, sidewalks, and patios. It’s perfect for:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>Concrete and stone driveways</li>
          <li>Patios and outdoor spaces</li>
          <li>Sidewalks and walkways</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Soft Washing: Gentle Cleaning for Delicate Surfaces
        </h3>
        <p className="mt-2">
          Soft washing uses low-pressure water combined with eco-friendly
          cleaning solutions to clean delicate surfaces like roofs, siding, and
          windows. It’s the best choice for:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>Shingle and tile roofs</li>
          <li>Vinyl or wood siding</li>
          <li>Windows and glass surfaces</li>
        </ul>

        <p className="mt-4">
          Contact us today to learn which cleaning method is best for your San
          Clemente property.
        </p>
      </section>

      {/* Window and Solar Panel Cleaning */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Window and Solar Panel Cleaning in San Clemente
        </h2>
        <p>
          With San Clemente’s sunny coastal climate, clean windows and efficient
          solar panels are essential for enjoying your home and maximizing
          energy efficiency. Our window and solar panel cleaning services ensure
          your property looks great and operates at peak performance.
        </p>

        <h3 className="text-2xl font-semibold mt-4">
          Benefits of Professional Window Cleaning
        </h3>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Enhance Curb Appeal:</b> Clean, streak-free windows improve the
            overall appearance of your home or business.
          </li>
          <li>
            <b>Protect Window Lifespan:</b> Regular cleaning prevents buildup
            that can cause damage and shorten the life of your windows.
          </li>
          <li>
            <b>Healthier Indoor Environment:</b> Allowing more natural light
            into your space reduces the need for artificial lighting and creates
            a healthier living environment.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Solar Panel Cleaning: Maximize Efficiency
        </h3>
        <p className="mt-2">
          Dust, salt, and grime can reduce your solar panels' efficiency by up
          to 30%. Our solar panel cleaning services remove debris, ensuring that
          your panels operate at full capacity and you save on energy bills.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Boost Energy Production:</b> Clean panels absorb more sunlight
            and generate more electricity.
          </li>
          <li>
            <b>Extend Panel Lifespan:</b> Regular cleaning prevents damage and
            increases the longevity of your investment.
          </li>
          <li>
            <b>Save on Energy Bills:</b> Maximize your solar savings by keeping
            your panels clean and efficient.
          </li>
        </ul>

        <p className="mt-4">
          Contact us today to schedule your window or solar panel cleaning in
          San Clemente and keep your property looking its best.
        </p>
      </section>

      <Testimonials />

      {/* About San Clemente */}
      <div className="text-center mt-10 mb-20">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Improve Your Property in San Clemente?
        </h3>
        <p className="mb-4">
          Whether you're looking for residential or commercial pressure washing
          services in San Clemente, Driveway Blasters LLC has the experience and
          expertise to deliver outstanding results.
        </p>
        <Link href="/contact" className="button btn-primary mt-4">
          Get Your Free Estimate Today!
        </Link>

        <h2 className="font-bold mt-10 text-left">About San Clemente, CA</h2>
        <p className="mt-4 text-left">
          San Clemente, known for its iconic pier, Spanish colonial
          architecture, and pristine beaches, is often referred to as the
          "Spanish Village by the Sea." With picturesque coastal views and
          year-round sunshine, it's no wonder why San Clemente is a favorite
          destination for homeowners and tourists alike. Whether you live near
          the coastal homes of <b>Marblehead</b> or the beautiful trails of{' '}
          <b>Rancho San Clemente</b>, maintaining your property’s exterior is
          crucial for preserving its value and curb appeal.
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaPage;
