import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import image from '../../../../public/images/hero3.jpeg';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title:
    'Top-Rated Pressure Washing Services in Mission Viejo | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert pressure washing services in Mission Viejo. Keep your property looking pristine with eco-friendly solutions. Get a free quote today!',
  openGraph: {
    title:
      'Top-Rated Pressure Washing Services in Mission Viejo | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in Mission Viejo. Keep your property looking pristine with eco-friendly solutions. Get a free quote today!',
    type: 'website',
    locale: 'en_US',
    url: `https://www.drivewayblasters.com/service-areas/mission-viejo`,
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
      'Top-Rated Pressure Washing Services in Mission Viejo | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert pressure washing services in Mission Viejo. Keep your property looking pristine with eco-friendly solutions. Get a free quote today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const ServiceAreaPage: React.FC = () => {
  const city = 'Mission Viejo'; // Define the city for the current page

  return (
    <div className="container mt-3">
      {/* Add the breadcrumb component here */}
      <Breadcrumb city={city} />
      <h1 className="mb-3 text-center text-4xl font-bold">
        Pressure Washing & Soft Washing Services in Mission Viejo
      </h1>
      <div className="container flex flex-col lg:flex-row">
        <div className="mb-4 flex-grow">
          <p>
            Welcome to Driveway Blasters LLC, your trusted provider for top-tier
            pressure washing services in <b>Mission Viejo, CA</b>. We understand
            how important it is to keep your home or business looking its best
            in this beautiful community. Whether you’re a homeowner in{' '}
            <b>Mission Viejo North</b> or managing a commercial property near{' '}
            <b>Lakeside</b>, our team is ready to provide expert cleaning
            services that boost curb appeal and extend the life of your exterior
            surfaces.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Friendly, professional service tailored to your needs.</li>
            <li>State-of-the-art equipment for safe and effective cleaning.</li>
            <li>
              Eco-friendly solutions to protect your property and the
              environment.
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
          alt="Professional Pressure Washing Services in Mission Viejo"
          width={1000}
          height={667}
          loading="lazy"
        />
      </div>

      {/* Expanded Service Descriptions */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Our Pressure Washing Services in Mission Viejo
        </h2>
        <p>
          We proudly serve all of Mission Viejo, offering comprehensive pressure
          washing services to meet the needs of both homeowners and businesses.
          Whether you're located in the scenic hills of <b>Alicia Park</b> or
          the bustling area around <b>The Shops at Mission Viejo</b>, we tailor
          our services to suit your property’s specific needs.
        </p>
        <p>
          Mission Viejo’s gorgeous Mediterranean climate makes it a great place
          to live, but it also brings unique challenges like dust, pollen, and
          debris that accumulate on surfaces over time. Our cleaning services
          will not only enhance your property’s appearance but also protect it
          from the long-term effects of environmental factors.
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Driveway Cleaning:</b> Remove oil stains, dirt, and grime that
            accumulate from daily use, keeping your driveway safe and visually
            appealing.
          </li>
          <li className="mt-2">
            <b>Roof Soft Washing:</b> Gently clean away mold, algae, and debris
            from your roof, preserving its appearance and structural integrity.
          </li>
          <li className="mt-2">
            <b>Window Cleaning:</b> Keep your windows streak-free and crystal
            clear, maximizing natural light in your home or business.
          </li>
          <li className="mt-2">
            <b>Graffiti Removal:</b> Quick and safe removal of graffiti to keep
            your property looking professional and well-maintained.
          </li>
          <li className="mt-2">
            <b>Commercial Pressure Washing:</b> Make a great first impression
            with clean storefronts, walkways, and parking lots, ensuring your
            business shines.
          </li>
        </ul>
      </section>

      {/* Detailed Service Explanation */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Why Choose Driveway Blasters in Mission Viejo?
        </h2>
        <p>
          At Driveway Blasters LLC, we understand the unique needs of Mission
          Viejo properties, from the family-friendly neighborhoods in{' '}
          <b>La Paz</b> to the lakeside homes near <b>Lake Mission Viejo</b>.
          Here’s why residents and businesses across the city trust us for their
          pressure washing needs:
        </p>
        <ul className="mb-4 list-disc pl-5 mt-4">
          <li className="mt-2">
            <b>Customized Cleaning Plans:</b> We develop personalized cleaning
            strategies based on the specific needs of your property, ensuring
            maximum effectiveness.
          </li>
          <li className="mt-2">
            <b>Professional Technicians:</b> Our team is highly trained in the
            latest pressure washing techniques, delivering top-tier results
            every time.
          </li>
          <li className="mt-2">
            <b>Environmentally Friendly:</b> We use biodegradable cleaning
            products that are safe for your family, pets, and landscaping, while
            still delivering powerful cleaning results.
          </li>
          <li className="mt-2">
            <b>Affordable Pricing:</b> We believe in transparent pricing with no
            hidden fees. Our services are designed to provide exceptional value
            for all our Mission Viejo clients.
          </li>
        </ul>
      </section>

      {/* Educational Content: Soft Washing vs Pressure Washing */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Soft Washing vs Pressure Washing: What’s the Difference?
        </h2>
        <p>
          Whether you need soft washing or pressure washing depends on your
          property’s surfaces. Both techniques are effective for different
          cleaning needs, ensuring your property looks its best without risk of
          damage.
        </p>
        <h3 className="text-2xl font-semibold mt-4">
          Pressure Washing: Perfect for Tough Surfaces
        </h3>
        <p className="mt-2">
          Pressure washing uses high-powered water jets to blast away dirt,
          grime, and stains from hard surfaces like driveways, walkways, and
          patios. It’s especially effective for:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>Concrete and stone driveways</li>
          <li>Patios and outdoor spaces</li>
          <li>Walkways and sidewalks</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Soft Washing: Gentle Cleaning for Delicate Surfaces
        </h3>
        <p className="mt-2">
          Soft washing uses eco-friendly cleaning solutions and low-pressure
          water to safely clean delicate surfaces like roofs, siding, and
          windows. It’s perfect for:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>Roofs with shingles or tiles</li>
          <li>Vinyl or wood siding</li>
          <li>Windows and glass surfaces</li>
        </ul>

        <p className="mt-4">
          Unsure which service is right for your property? Contact us today to
          learn more about our services and get a free consultation.
        </p>
      </section>

      {/* Window and Solar Panel Cleaning */}
      <section className="mt-10">
        <h2 className="mb-3 text-3xl font-bold">
          Window and Solar Panel Cleaning in Mission Viejo
        </h2>
        <p>
          Mission Viejo’s sunny weather makes solar panel cleaning essential for
          maximizing energy efficiency. Additionally, our window cleaning
          services will keep your home or business looking bright and inviting
          all year long.
        </p>

        <h3 className="text-2xl font-semibold mt-4">
          Benefits of Professional Window Cleaning
        </h3>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Improved Appearance:</b> Clean windows enhance the look of your
            home or business, creating a welcoming and professional atmosphere.
          </li>
          <li>
            <b>Increased Lifespan:</b> Regular cleaning prevents dirt buildup
            that can cause long-term damage, saving you money on repairs.
          </li>
          <li>
            <b>Healthier Indoor Environment:</b> More natural light can improve
            your indoor air quality and reduce reliance on artificial lighting.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-4">
          Solar Panel Cleaning: Boost Efficiency and Save Money
        </h3>
        <p className="mt-2">
          Dirty solar panels can lose up to 30% of their efficiency. Our
          cleaning services ensure your panels are operating at peak
          performance, helping you save on energy costs.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>
            <b>Boost Energy Efficiency:</b> Clean panels absorb more sunlight,
            generating more electricity.
          </li>
          <li>
            <b>Protect Your Investment:</b> Regular cleaning prevents damage and
            extends the life of your solar panels.
          </li>
          <li>
            <b>Lower Energy Bills:</b> More efficient panels mean greater
            savings on your utility bills.
          </li>
        </ul>

        <p className="mt-4">
          Contact us today to schedule your window or solar panel cleaning
          service in Mission Viejo and keep your property looking its best.
        </p>
      </section>

      <Testimonials />
      <div className="text-center mt-10 mb-20">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Improve Your Property in Mission Viejo?
        </h3>
        <p className="mb-4">
          Whether you're looking for residential or commercial pressure washing
          services in Mission Viejo, Driveway Blasters LLC has the experience
          and expertise to deliver outstanding results.
        </p>
        <Link href="/contact" className="button btn-primary mt-4">
          Get Your Free Estimate Today!
        </Link>

        <h2 className="font-bold mt-10 text-left">About Mission Viejo, CA</h2>
        <p className="mt-4 text-left">
          Mission Viejo, CA, is one of the largest master-planned communities in
          the country, known for its tree-lined streets, beautiful parks, and
          family-friendly atmosphere. With attractions like{' '}
          <b>Lake Mission Viejo</b> and the <b>Mission Viejo Country Club</b>,
          the city offers a high quality of life for its residents. Whether
          you're in the heart of <b>Mission Viejo North</b> or near the
          picturesque views of <b>Oso Creek Trail</b>, regular pressure washing
          is key to maintaining the stunning appearance of your property.
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaPage;
