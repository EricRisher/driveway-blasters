'use server';

import React from 'react';
import Link from 'next/link';

const Windows: React.FC = () => {
  return (
    <div className="container mt-3">
      <h1 className="mb-4 text-center">
        <b>Spotless Window & Solar Panel Cleaning Services</b>
      </h1>
      <p className="lead mb-4">
        Driveway Blasters LLC provides <b>top-tier</b> window cleaning services
        across Orange, Riverside, and Los Angeles County. Emphasizing{' '}
        <b>safety</b> and <b>efficiency</b>, our team delivers{' '}
        <b>exceptional</b> cleaning without the hassle of doing it yourself.
      </p>

      <h2 className="mb-3">
        <b>Precision Window Cleaning</b>
      </h2>
      <p className="mb-4">
        We leverage state-of-the-art equipment and <b>eco-friendly</b> cleaning
        solutions to ensure your windows shine without <b>streaks</b> or{' '}
        <b>spots</b>. Our meticulous cleaning process includes:
      </p>
      <ul>
        <li>Thorough washing of window glass, frames, and tracks.</li>
        <li>
          Use of purified water to eliminate mineral deposit buildup, ensuring a{' '}
          <b>spot-free</b> finish.
        </li>
        <li>
          Safe and effective techniques for both interior and exterior windows,
          enhancing natural light and visibility.
        </li>
      </ul>

      <h2 className="mb-3">
        <b>Comprehensive Services for Every Need</b>
      </h2>
      <p className="mb-4">
        We offer specialized <b>Solar Panel Cleaning</b> as part of our
        comprehensive cleaning services, essential for:
      </p>
      <ul>
        <li>
          <b>Maintaining Energy Efficiency:</b> Regular cleaning removes debris,
          dust, and bird droppings that can significantly decrease solar panel
          effectiveness.
        </li>
        <li>
          <b>Prolonging Panel Lifespan:</b> Keeping solar panels clean helps
          prevent damage and extends their useful life.
        </li>
        <li>
          <b>Enhancing Return on Investment:</b> Clean panels operate at peak
          efficiency, ensuring you get the best return on your solar energy
          investment.
        </li>
      </ul>
      <p className="mb-4">
        This service is ideal for both residential and commercial properties
        looking to optimize their energy solutions and sustainability.
      </p>

      <h2 className="mb-3">
        <b>Why Professional Cleaning?</b>
      </h2>
      <p className="mb-4">
        Professional cleaning helps not only in enhancing the <b>curb appeal</b>{' '}
        but also in extending the life of your property’s external features.
        Regular maintenance prevents the buildup of harmful materials that can
        lead to expensive repairs.
      </p>

      <div className="d-flex justify-content-center">
        <Link href="/contact" className="button btn-primary mb-5" passHref>
          Get Your Free Quote!
        </Link>
      </div>
    </div>
  );
};

export default Windows;
