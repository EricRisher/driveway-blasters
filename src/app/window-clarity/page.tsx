import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title:
    'Expert Window Cleaning in Orange County | Driveway Blasters LLC',
  description:
    'Driveway Blasters LLC offers expert window cleaning services in Orange, Riverside, and Los Angeles Counties. Our eco-friendly methods ensure streak-free, spotless windows that enhance your property’s appearance. Get a free quote today!',
  openGraph: {
    title:
      'Expert Window Cleaning in Orange County | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert window cleaning services in Orange, Riverside, and Los Angeles Counties. Our eco-friendly methods ensure streak-free, spotless windows that enhance your property’s appearance. Get a free quote today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/window-cleaning',
    siteName: 'Driveway Blasters LLC',
    images: [
      {
        url: 'https://www.drivewayblasters.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Driveway Blasters LLC Window Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Expert Window Cleaning in Orange County | Driveway Blasters LLC',
    description:
      'Driveway Blasters LLC offers expert window cleaning services in Orange, Riverside, and Los Angeles Counties. Our eco-friendly methods ensure streak-free, spotless windows that enhance your property’s appearance. Get a free quote today!',
    images: ['https://www.drivewayblasters.com/opengraph-image.png'],
  },
  keywords: [
    'window cleaning',
    'window cleaning services',
    'window cleaning near me',
    'window cleaning in Orange County',
    'window cleaning in Riverside County',
    'window cleaning in Los Angeles County',
  ],
};

const WindowClarity: React.FC = () => {
  return (
    <div className="container mt-3">
      <h1 className="mb-4 text-center">
        <b>Spotless Window Cleaning Services</b>
      </h1>

      <p className="lead mb-4">
        Driveway Blasters LLC provides <b>top-tier</b> window cleaning services
        across Orange, Riverside, and Los Angeles County. Emphasizing{' '}
        <b>safety</b> and <b>efficiency</b>, our team delivers{' '}
        <b>exceptional</b> cleaning without the hassle of doing it yourself.
      </p>

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-4" passHref>
          Get Your Free Quote!
        </Link>
      </div>

      <h2 className="mb-2">
        <b>Precision Window Cleaning</b>
      </h2>
      <p className="mb-4">
        Are your windows looking streaky and dull? We leverage state-of-the-art
        equipment and <b>eco-friendly</b> cleaning solutions to ensure your
        windows shine without <b>streaks</b> or <b>spots</b> enhancing the
        appearance and ambiance of your home or business. Our meticulous
        cleaning process includes:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mt-2">
          <b>Complete Washing of Window Glass, Frames, and Tracks:</b> Ensure
          every part of your window is spotless, from the glass to the frames
          and tracks, for a thoroughly clean look.
        </li>
        {/* 
          <b>Spot-Free Finish with Purified Water:</b> We use purified water to
          remove mineral deposits and hard water stains, leaving your windows
          crystal clear.
          */}
        <li className="mt-2">
          <b>Boost Natural Light and Visibility:</b> Our meticulous cleaning
          enhances natural light penetration, making your space brighter and
          more inviting.
        </li>
      </ul>

      <h2 className="mb-2">
        <b>The Benefits of Professional Window Cleaning</b>
      </h2>
      <p className="mb-4">
        Professional window cleaning offers numerous benefits beyond just a
        clear view. Here’s how regular window cleaning can enhance your
        property:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="mt-2">
          <b>Enhance Your Home’s Curb Appeal:</b> Sparkling clean windows
          elevate the appearance of your property, creating a positive first
          impression on visitors, clients, and potential buyers. A
          well-maintained exterior not only boosts your home’s aesthetic appeal
          but also reflects the care and attention you give to your property.
        </li>
        <li className="mt-2">
          <b>Increases Natural Light:</b> Professionally cleaned windows allow
          maximum sunlight to flood your space, creating a brighter, more
          cheerful atmosphere that enhances the mood and energy of your home or
          business.
        </li>
        <li className="mt-2">
          <b>Extend Your Window's Lifespan:</b> Regular removal of dirt, debris,
          and hard water stains prevents long-term damage, keeping your windows
          in excellent condition for years to come.
        </li>
        <li className="mt-2">
          <b>Enhance Energy Efficiency:</b> Clean windows allow more natural
          light, reducing reliance on artificial lighting and helping to lower
          your energy bills while creating a more sustainable home environment.
        </li>
        <li className="mt-2">
          <b>Create a Healthier Indoor Environment:</b> Our window cleaning
          services remove allergens such as mold, pollen, and dust, contributing
          to better indoor air quality and a healthier space for you and your
          family.
        </li>
      </ul>

      <h2 className="mb-3">
        <b>Why Choose Us for Window Cleaning?</b>
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="mt-2">
          <b>Experienced Technicians:</b> Our team is proficient in advanced
          cleaning techniques, ensuring your windows are spotless.
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
        <ul className="mb-4 list-disc pl-5">
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
        Ready to enhance and beautify your windows? At Driveway Blasters LLC,
        our professional window cleaning services go beyond aesthetics. We
        ensure your windows are not only spotless and streak-free but also
        contribute to a healthier, more energy-efficient home environment. With
        our eco-friendly cleaning solutions, you can trust that your property is
        being cared for with the utmost respect for both your home and the
        environment. Contact us today for a free estimate and see how our expert
        care can transform the look and feel of your space.
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

export default WindowClarity;
