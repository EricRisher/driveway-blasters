import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import serviceAreas from '../../../public/images/serviceareas.webp';
import servicingCounties from '../../../public/images/servicing-counties.webp';
import React from 'react';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Driveway Blasters LLC - Pressure Washing Service Areas',
  description:
    'Driveway Blasters LLC provides expert pressure washing services in Orange County, Riverside County, and Los Angeles County. Enhance your curb appeal with our professional cleaning services. Get your free quote today!',
  openGraph: {
    title: 'Driveway Blasters LLC - Pressure Washing Service Areas',
    description:
      'Driveway Blasters LLC provides expert pressure washing services in Orange County, Riverside County, and Los Angeles County. Enhance your curb appeal with our professional cleaning services. Get your free quote today!',
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
    title: 'Driveway Blasters LLC - Pressure Washing Service Areas',
    description:
      'Driveway Blasters LLC provides expert pressure washing services in Orange County, Riverside County, and Los Angeles County. Enhance your curb appeal with our professional cleaning services. Get your free quote today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
};

const Locations: React.FC = () => {
  return (
    <section className="location-container">
      <header>
        <div className="bg-wrapper">
          <Image
            src={serviceAreas}
            alt="Service Areas"
            className="service-area-bg-img"
            placeholder="blur"
          />
          <div className="hero-text-block">
            <h1 className="service-area-h1">Areas We Serve</h1>
            <Link
              href="/contact"
              className="button btn-primary locations-btn mt-3 mb-4"
              passHref
            >
              Get Your Free Quote!
            </Link>
          </div>
        </div>
      </header>
      <section className="location-container">
        <article className="service-area-article">
          <Image
            src={servicingCounties}
            alt="Service Area"
            className="service-area-image"
            placeholder="blur"
          />
          <div className="service-areas">
            <h3 className="service-counties-h3 mt-3 text-center">
              Orange County:
            </h3>
            <p className="service-cities text-center">
              Anaheim - Santa Ana - Irvine - Huntington Beach - Costa Mesa -
              Orange - Aliso Viejo - Mission Viejo - Newport Beach - Laguna
              Niguel - Fullerton - Garden Grove - Westminster - Buena Park -
              Lake Forest - San Clemente - Placentia - Tustin
            </p>
            <p className="m-3">
              In Orange County, we provide top-notch pressure washing services
              for residential and commercial properties. Our team is well-versed
              in the unique challenges of coastal environments, ensuring your
              property remains spotless and well-maintained.
            </p>{' '}
          </div>

          <div className="service-areas">
            <h3 className="service-counties-h3 mt-5 text-center">
              Riverside County:
            </h3>
            <p className="service-cities text-center">
              Riverside - Corona - Moreno Valley - Temecula - Murrieta - Palm
              Springs - Perris - Lake Elsinore - Indio - Hemet - Menifee -
              Eastvale - Jurupa Valley - San Jacinto - Wildomar - Norco -
              Cathedral City
            </p>
            <p className="m-3">
              Our services in Riverside County cater to both urban and suburban
              settings. Whether you need a driveway cleaned in Riverside or a
              commercial building washed in Palm Springs, Driveway Blasters LLC
              has got you covered.
            </p>
          </div>

          <div className="service-areas">
            <h3 className="service-counties-h3 mt-5 text-center">
              Los Angeles County:
            </h3>
            <p className="service-cities text-center">
              Los Angeles - Long Beach - Pasadena - Santa Monica - Burbank -
              Glendale - Pomona - Torrance - Whittier - Lancaster - Palmdale -
              West Covina - Norwalk - El Monte - Downey - Inglewood - Hawthorne
              - Culver City
            </p>
            <p className="m-3">
              Los Angeles County demands a higher standard of cleanliness due to
              its dense population and heavy traffic. Our team excels in
              providing pressure washing services that meet the rigorous demands
              of LA’s diverse neighborhoods.
            </p>
          </div>

          <h4 className="mt-5">+ All Surrounding Cities!</h4>

          <Testimonials />

          <h2 className="text-center mt-5">
            Eager to Enhance Your Curb Appeal?
          </h2>
          <Link
            href="/contact"
            className="button btn-primary mt-5 mb-4"
            passHref
          >
            Get Your Free Quote!
          </Link>
        </article>
      </section>
    </section>
  );
};

export default Locations;
