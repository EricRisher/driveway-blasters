import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Driveway Blasters LLC | Expert Pressure Washing Team',
  description:
    'Learn about the expert team behind Driveway Blasters LLC. Our skilled professionals provide top-notch pressure washing services in Orange, Riverside, and LA counties.',
  openGraph: {
    title: 'About Driveway Blasters LLC | Expert Pressure Washing Team',
    description:
      'Learn about the expert team behind Driveway Blasters LLC. Our skilled professionals provide top-notch pressure washing services in Orange, Riverside, and LA counties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com/about-us',
    siteName: 'Driveway Blasters LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Driveway Blasters LLC | Expert Pressure Washing Team',
    description:
      'Learn about the expert team behind Driveway Blasters LLC. Our skilled professionals provide top-notch pressure washing services in Orange, Riverside, and LA counties.',
  },
  keywords: [
    'pressure washing',
    'pressure washing services',
    'pressure washing near me',
    'pressure washing in Orange County',
    'pressure washing in Riverside County',
    'pressure washing in Los Angeles County',
  ],

};

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-block">
        <h1 className="about-us-h1 text-center">About Driveway Blasters LLC</h1>
      </div>
      <section className="about-text-wrapper mt-3">
        <div className="dottedBorder pb-4 about-us-p flex flex-col md:flex-row items-center">
          <p className="flex-grow md:flex-grow-0 ml-3 mr-3 text-start">
            Founded two years ago by Eric and Jeremy,{' '}
            <b>Driveway Blasters LLC</b> leads in gentle, effective cleaning. We
            prioritize excellent results and property integrity delivering the
            best pressure washing services in
            <b> Riverside, Los Angeles, and Orange County</b>.
          </p>
          <div className="headshot-wrapper flex flex-col md:flex-row flex-shrink-0">
            <Image
              src="/images/eric-headshot.jpg"
              alt="About Us"
              width={300}
              height={300}
              className="rounded m-3 flex-shrink"
              loading="eager"
            />
            <Image
              src="/images/jeremy-headshot.jpg"
              alt="About Us"
              width={300}
              height={300}
              className="rounded m-3 flex-shrink"
              loading="eager"
            />
          </div>
        </div>

        <div className="dottedBorder pb-4">
          <h2 className="mt-4">
            <b>Experts In High-Pressure and Soft Washing</b>
          </h2>
          <ul className="list-disc pl-5">
            <li className="mt-3">
              <strong>Versatile Cleaning Options:</strong> We offer both
              high-pressure cleaning for tough jobs and gentle, eco-friendly
              soft wash techniques.
            </li>
            <li className="mt-3">
              <strong>Effective Results:</strong> Each method effectively
              removes dirt and grime, enhancing your home's curb appeal.
            </li>
            <li className="mt-3">
              <strong>Tailored to Your Needs:</strong> With extensive experience
              in Southern California, our services are customized to meet the
              unique demands of each home.
            </li>
          </ul>
        </div>

        <h2 className="pt-3">Commitment to Integrity and Excellence</h2>
        <div className="dottedBorder pb-4">
          <p>
            Driveway Blasters LLC stands by our promise to deliver outstanding
            results every time. We operate with full transparency, never
            overstating our capabilities or misleading our clients. Our company
            guarantees quality and customer satisfaction.
          </p>
        </div>

        <h2 className="pt-3">Grow With Us</h2>
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
      <Link href="/contact" className="button btn-primary mb-4" passHref>
        {' '}
        Get Your Free Quote!
      </Link>
    </div>
  );
};

export default AboutUs;
