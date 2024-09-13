import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import serviceAreas from '../../../public/images/serviceareas.webp';
import servicingCounties from '../../../public/images/servicing-counties.webp';
import React from 'react';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title:
    'Top-Rated Pressure Washing Services in Orange & Riverside Counties | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC provides expert pressure washing services across Orange and Riverside counties. Tailored services to meet local needs. Get your free quote today!',
  openGraph: {
    title:
      'Top-Rated Pressure Washing Services in Orange & Riverside Counties | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC provides expert pressure washing services across Orange and Riverside counties. Tailored services to meet local needs. Get your free quote today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/locations',
    siteName: 'Driveway Blasters LLC',
    images: [
      {
        url: 'https://www.drivewayblasters.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Driveway Blasters LLC Service Areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Top-Rated Pressure Washing Services in Orange & Riverside Counties | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC provides expert pressure washing services across Orange and Riverside counties. Tailored services to meet local needs. Get your free quote today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

// Define cities for Orange and Riverside counties
const orangeCountyCities = [
  { name: 'Irvine, CA', link: '/service-areas/irvine' },
  { name: 'Aliso Viejo, CA', link: '/service-areas/aliso-viejo' },
  { name: 'Mission Viejo, CA', link: '/service-areas/mission-viejo' },
  { name: 'San Clemente, CA', link: '/service-areas/san-clemente' },
  { name: 'Tustin', link: '/service-areas/tustin' },
  'Anaheim, CA',
  'Santa Ana, CA',
  'Huntington Beach, CA',
  'Dana Point, CA',
  'Newport Beach, CA',
];

const riversideCountyCities = [
  { name: 'Riverside, CA', link: '/service-areas/riverside' },
  { name: 'Corona, CA', link: '/service-areas/corona' },
  { name: 'Moreno Valley, CA', link: '/service-areas/moreno-valley' },
  { name: 'Norco, CA', link: '/service-areas/norco' },
  { name: 'Eastvale, CA', link: '/service-areas/eastvale' },
  'Temecula, CA',
  'Murrieta, CA',
  'Lake Elsinore, CA',
  'Menifee, CA',
  'Jurupa Valley, CA',
];

// Helper function to render cities with links
const renderCities = (cities: (string | { name: string; link?: string })[]) => {
  return cities.map((city, index) => {
    if (typeof city === 'string') {
      return (
        <button
          key={index}
          className="bg-slate-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {city}
        </button>
      );
    }
    return (
      <Link href={city.link ?? '#'}>
        <button
          key={index}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {city.name}
        </button>
      </Link>
    );
  });
};


const Locations: React.FC = () => {
  return (
    <section className="location-container">
      {/* Header Section with Hero Image */}
      <header>
        <div className="bg-wrapper">
          <Image
            src={serviceAreas}
            alt="Service Areas"
            className="service-area-bg-img"
            placeholder="blur"
          />
          <div className="hero-text-block">
            <h1 className="service-area-h1 text-center m-auto">
              Areas We Serve
            </h1>
            <Link
              href="/contact"
              className="button btn-primary locations-btn mt-3 mb-4"
            >
              Get Your Free Quote!
            </Link>
          </div>
        </div>
      </header>

      {/* Service Areas Section */}
      <section className="location-container">
        <article className="service-area-article">
          {/* Orange County Section */}
          <div className="service-areas">
            <h3 className="service-counties-h3 mt-3 text-center">
              Pressure Washing Services in Orange County
            </h3>
            <p className="service-cities text-center m-auto">
              {renderCities(orangeCountyCities)}
            </p>
            <p className="m-3">
              Our Orange County pressure washing services are designed to
              protect and enhance your property’s curb appeal. From the coastal
              communities of <b>Newport Beach</b> to the bustling cities of{' '}
              <b>Anaheim</b> and <b>Irvine</b>, Driveway Blasters LLC ensures
              your property remains pristine, even in high-traffic and salt-air
              environments.
            </p>
          </div>

          {/* Riverside County Section */}
          <div className="service-areas">
            <h3 className="service-counties-h3 mt-5 text-center">
              Pressure Washing Services in Riverside County
            </h3>
            <p className="service-cities text-center">
              {renderCities(riversideCountyCities)}
            </p>
            <p className="m-3">
              In Riverside County, we understand the unique challenges faced by
              homeowners and businesses due to the dry climate and dust buildup.
              Whether you’re in <b>Corona</b>, <b>Temecula</b>, or <b>Norco</b>,
              our expert pressure washing services will keep your property
              looking its best and protect it from long-term damage.
            </p>
          </div>

          <h4 className="mt-5 text-center">+ All Surrounding Areas</h4>

          {/* Testimonials Section */}
          <Testimonials />

          {/* Call to Action */}
          <h2 className="text-center mt-5">Transform Your Property Today!</h2>
          <p className="text-center">
            Driveway Blasters LLC offers reliable and affordable pressure
            washing services for homes and businesses in Orange and Riverside
            Counties. Get started with a free quote and see the difference for
            yourself!
          </p>
          <Link
            href="/contact"
            className="button btn-primary mt-5 mb-4 text-center"
          >
            Request Your Free Quote
          </Link>
        </article>
      </section>
    </section>
  );
};

export default Locations;
