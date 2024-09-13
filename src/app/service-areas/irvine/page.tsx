import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import image from '../../../../public/images/hero3.jpeg';

export const metadata: Metadata = {
  title:
    'Top-Rated Pressure Washing Services in Irvine | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert pressure washing services in Irvine. Boost your curb appeal with eco-friendly cleaning solutions. Call now for a free quote!',
  openGraph: {
    title:
      'Top-Rated Pressure Washing Services in Irvine | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in Irvine. Boost your curb appeal with eco-friendly cleaning solutions. Call now for a free quote!',
    type: 'website',
    locale: 'en_US',
    url: `https://www.drivewayblasters.com/service-areas/irvine`,
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
      'Top-Rated Pressure Washing Services in Irvine | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in Irvine. Boost your curb appeal with eco-friendly cleaning solutions. Call now for a free quote!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const ServiceAreaPage: React.FC = () => {
  return (
    <div className="container mt-3">
      <h1 className="mb-3 text-center text-4xl font-bold">
        Pressure Washing & Soft Washing Services in Irvine
      </h1>
      <div className="container flex flex-col lg:flex-row">
        <div className="mb-4 flex-grow">
          <p>
            At Driveway Blasters LLC, we proudly serve <b>Irvine, CA</b> with
            top-tier pressure washing and soft washing services. Irvine’s
            master-planned communities and pristine environment demand regular
            exterior cleaning to maintain curb appeal and property value.
            Whether you need <b>driveway cleaning</b>, <b>roof washing</b>, or{' '}
            <b>window cleaning</b>, we use eco-friendly solutions to keep your
            property looking flawless.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Trusted local experts in Irvine, CA.</li>
            <li>
              Safe and effective pressure washing and soft washing techniques.
            </li>
            <li>
              Eco-friendly solutions to protect your property and the
              environment.
            </li>
          </ul>
          <Link
            href="/contact"
            className="button btn-primary mt-5 inline-block"
          >
            Get a Free Quote Today!
          </Link>
        </div>
        <Image
          className="w-full lg:w-1/2 mb-5 rounded-3 p-5"
          src={image}
          alt="Professional Pressure Washing Services in Irvine"
          width={1000}
          height={667}
          loading="lazy"
        />
      </div>

      {/* Expanded Service Descriptions */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Our Pressure Washing Services in Irvine
        </h2>
        <p>
          Driveway Blasters LLC offers a wide range of pressure washing services
          to meet the needs of both residential and commercial properties across
          Irvine. From the stunning neighborhoods of <b>Woodbridge</b> and{' '}
          <b>Quail Hill</b> to bustling commercial areas like{' '}
          <b>Irvine Spectrum</b>, we ensure your property remains clean and
          well-maintained year-round.
        </p>
        <p>
          Irvine’s proximity to open spaces and its sunny climate can result in
          dirt, dust, and debris accumulating on surfaces over time. Regular
          pressure washing helps remove these elements, protecting your property
          from long-term damage and keeping it looking pristine.
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Driveway Cleaning:</b> Remove oil stains, dirt, and grime from
            your driveway to restore its appearance and improve safety.
          </li>
          <li className="mt-2">
            <b>Roof Soft Washing:</b> A gentle method that removes mold, algae,
            and dirt from your roof without damaging the surface—especially
            important in Irvine’s sunny climate where algae growth can occur.
          </li>
          <li className="mt-2">
            <b>Window Cleaning:</b> Keep your windows crystal clear and free
            from dust, debris, and water stains, which are common due to the
            area's sunny weather.
          </li>
          <li className="mt-2">
            <b>Graffiti Removal:</b> Quick and safe removal of graffiti that may
            affect commercial or residential properties, especially in public
            spaces near <b>University Park</b> or <b>Northwood</b>.
          </li>
          <li className="mt-2">
            <b>Commercial Pressure Washing:</b> Clean and maintain your business
            premises, including storefronts, walkways, and parking lots,
            ensuring your business remains inviting in high-traffic areas like{' '}
            <b>John Wayne Airport</b> and <b>Jamboree Center</b>.
          </li>
        </ul>
      </section>

      {/* Detailed Service Explanation */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Why Choose Driveway Blasters in Irvine?
        </h2>
        <p>
          At Driveway Blasters LLC, we know Irvine well—from the family-friendly
          neighborhoods like <b>Portola Springs</b> to the fast-growing
          commercial hubs. Our experience ensures that your property gets the
          cleaning it needs, while also protecting it from environmental factors
          like sun damage and dirt buildup.
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Tailored Cleaning Solutions:</b> We customize our services to
            meet the unique needs of Irvine properties, taking into account
            factors like air quality and heavy traffic.
          </li>
          <li className="mt-2">
            <b>Experienced & Professional Team:</b> Our skilled technicians are
            trained to handle the toughest cleaning jobs with care, ensuring
            excellent results for both residential and commercial properties.
          </li>
          <li className="mt-2">
            <b>Eco-Friendly & Safe:</b> We use environmentally safe cleaning
            products that protect your family, pets, and landscaping, making
            sure your property looks its best while staying green.
          </li>
          <li className="mt-2">
            <b>Affordable Pricing:</b> We offer competitive and transparent
            pricing for all of our services, ensuring that our Irvine clients
            get top value.
          </li>
        </ul>
      </section>

      {/* Educational Content: Soft Washing vs Pressure Washing */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Soft Washing vs Pressure Washing: What’s the Difference?
        </h2>
        <p>
          Understanding the difference between soft washing and pressure washing
          helps you select the right service for your property. Each method is
          designed for specific surfaces, ensuring optimal results without
          causing damage.
        </p>
        <h3 className="text-2xl font-semibold mt-4">
          Pressure Washing: High-Power Cleaning for Hard Surfaces
        </h3>
        <p className="mt-2">
          Pressure washing uses high-pressure water to blast away dirt, grime,
          and stains. It's perfect for tough, durable surfaces like:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Driveways and Walkways:</b> Keep your concrete, brick, or stone
            surfaces clean and safe.
          </li>
          <li>
            <b>Commercial Areas:</b> Ensure your business premises are spotless
            and inviting to customers.
          </li>
          <li>
            <b>Patios and Decks:</b> Remove dirt and algae from outdoor spaces,
            leaving them ready for entertaining.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Soft Washing: Gentle Cleaning for Delicate Surfaces
        </h3>
        <p className="mt-2">
          Soft washing uses low-pressure water and eco-friendly cleaning agents
          to gently clean delicate surfaces like:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Roofs:</b> Safely clean algae, mold, and dirt from your roof,
            extending its life without causing damage.
          </li>
          <li>
            <b>Siding:</b> Whether you have vinyl, stucco, or wood siding, soft
            washing removes dirt without stripping paint or harming your home’s
            exterior.
          </li>
          <li>
            <b>Windows and Gutters:</b> Ensure your windows and gutters remain
            clean and functional, preventing water damage and streaks.
          </li>
        </ul>

        <p className="mt-4">
          Contact us today to learn which cleaning method is best for your
          Irvine property.
        </p>
      </section>

      {/* Window and Solar Panel Cleaning */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Window and Solar Panel Cleaning in Irvine
        </h2>
        <p>
          With Irvine’s sunny climate and eco-conscious community, keeping your
          windows and solar panels clean is key to maximizing energy efficiency
          and curb appeal. Our professional cleaning services ensure that your
          windows shine and your solar panels operate at peak performance,
          delivering both aesthetic and financial benefits.
        </p>

        <h3 className="text-2xl font-semibold mt-4">
          Benefits of Professional Window Cleaning
        </h3>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Enhanced Curb Appeal:</b> Clean, streak-free windows enhance the
            look of your property, making it more inviting.
          </li>
          <li>
            <b>Prevents Long-Term Damage:</b> Regular cleaning removes buildup
            that can cause stains or damage over time.
          </li>
          <li>
            <b>Maximized Natural Light:</b> Keep your windows clear and enjoy
            more natural light inside your home or business.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Solar Panel Cleaning: Maximize Energy Efficiency
        </h3>
        <p className="mt-2">
          Dust and debris can reduce the efficiency of your solar panels by up
          to 30%. Our cleaning services ensure that your panels are absorbing as
          much sunlight as possible, saving you money on energy costs.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Boost Energy Efficiency:</b> Clean panels absorb more sunlight,
            leading to increased energy production.
          </li>
          <li>
            <b>Extend Panel Lifespan:</b> Regular cleaning helps prevent buildup
            that can cause wear and tear, ensuring your panels last longer.
          </li>
          <li>
            <b>Save on Energy Bills:</b> More efficient solar panels mean lower
            utility bills and a faster return on your investment.
          </li>
        </ul>

        <p className="mt-4">
          Contact us today to schedule your window or solar panel cleaning
          service in Irvine!
        </p>
      </section>

      <Testimonials />
      <div className="text-center mt-10 mb-20">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Enhance Your Property in Irvine?
        </h3>
        <p className="mb-4">
          Whether you're looking for residential or commercial pressure washing
          services in Irvine, Driveway Blasters LLC has the expertise to deliver
          outstanding results.
        </p>
        <Link href="/contact" className="button btn-primary mt-4">
          Get Your Free Estimate Today!
        </Link>

        <h2 className="font-bold mt-10 text-left">About Irvine, CA</h2>
        <p className="mt-4 text-left">
          Irvine, CA, is a master-planned community known for its clean streets,
          award-winning schools, and vibrant business districts like{' '}
          <b>Irvine Spectrum</b> and <b>Great Park Neighborhoods</b>. With its
          Mediterranean climate, abundant parks, and nearby open spaces, Irvine
          is an ideal place to live and work. However, the city’s sunny weather
          and proximity to the coast mean that regular cleaning is essential to
          maintain the beauty of its homes and businesses.
        </p>
        <p className="mt-4 text-left">
          Neighborhoods like <b>University Park</b>, <b>Woodbury</b>, and{' '}
          <b>Northwood</b> are known for their well-maintained properties, and
          Driveway Blasters LLC is proud to help residents and businesses keep
          their exteriors clean and welcoming.
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaPage;
