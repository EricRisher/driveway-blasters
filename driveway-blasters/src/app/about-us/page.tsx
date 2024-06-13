import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Driveway Blasters LLC - About Us',
  description:
    'Learn about Driveway Blasters LLC: founded by Eric and Jeremy, providing pressure washing in Riverside, LA, and Orange County with integrity and excellence.',
};

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-block">
        <h1 className="about-us-h1">About Our Team</h1>
      </div>
      <section className="about-text-wrapper mt-3">
        <div className="dottedBorder pb-4">
          <p>
            Founded two years ago by Eric and Jeremy,{' '}
            <b>Driveway Blasters LLC</b> leads in gentle, effective cleaning. We
            prioritize excellent results and property integrity delivering the
            best pressure washing services in
            <b> Riverside, Los Angeles, and Orange County</b>.
          </p>
        </div>

        <div className="dottedBorder pb-4">
          <h2 className="mt-4">
            <b>Experts In High-Pressure and Soft Washing</b>
          </h2>
          <ul>
            <li>
              <strong>Versatile Cleaning Options:</strong> We offer both
              high-pressure cleaning for tough jobs and gentle, eco-friendly
              soft wash techniques.
            </li>
            <li>
              <strong>Effective Results:</strong> Each method effectively
              removes dirt and grime, enhancing your home's curb appeal.
            </li>
            <li>
              <strong>Tailored to Your Needs:</strong> With extensive experience
              in Southern California, our services are customized to meet the
              unique demands of each home.
            </li>
          </ul>
        </div>

        <h2>Commitment to Integrity and Excellence</h2>
        <div className="dottedBorder pb-4">
          <p>
            Driveway Blasters LLC stands by our promise to deliver outstanding
            results every time. We operate with full transparency, never
            overstating our capabilities or misleading our clients. Our company
            guarantees quality and customer satisfaction.
          </p>
        </div>

        <h2>Grow With Us</h2>
        <p>
          As we continue to expand and refine our services, we are eager to
          bring our innovative cleaning solutions to more homes in the area.
          Join the countless homeowners who trust Driveway Blasters LLC to
          maintain and enhance their property.
        </p>

        <Testimonials />

        <h3 className="text-center">
          Are you ready to see the difference professional care can make?
        </h3>
      </section>
      <Link
        href="/contact"
        className="button btn-primary mb-4"
        passHref
      >
        {' '}
        Get Your Free Quote!
      </Link>
    </div>
  );
};

export default AboutUs;
