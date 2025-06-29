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
            Founded three years ago by Eric and Jeremy,{' '}
            <b>Driveway Blasters LLC</b> leads in gentle, effective cleaning. We
            prioritize excellent results and property integrity delivering the
            best pressure washing services in
            <b> Riverside, Los Angeles, and Orange County</b>. Our team
            specializes in high-pressure and soft washing techniques, ensuring
            your home looks its best without damaging surfaces. We are fully
            licensed and insured, providing peace of mind with every service.
            Our commitment to quality and customer satisfaction sets us apart in
            the industry. We pride ourselves on our integrity, never overstating
            our capabilities or misleading our clients. Our goal is to deliver
            outstanding results every time, ensuring your home maintains its
            curb appeal and value.
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
            <li className="mt-3">
              <strong>Licensed and Insured:</strong> We are fully licensed and
              insured, providing peace of mind with every service.
            </li>
            <li className="mt-3">
              <strong>Customer Satisfaction Guaranteed:</strong> Our commitment
              to quality and customer satisfaction sets us apart in the
              industry.
            </li>
            <li className="mt-3">
              <strong>Integrity First:</strong> We never overstate our
              capabilities or mislead our clients. Our goal is to deliver
              outstanding results every time.
            </li>
          </ul>
        </div>

        <h2 className="pt-3">Commitment to Integrity and Excellence</h2>
        <div
          className="dottedBorder pb-4 flex flex-col gap-3 w-[84%]
        pl-3"
        >
          <p>
            Driveway Blasters LLC stands by our promise to deliver outstanding
            results every time. We operate with full transparency, never
            overstating our capabilities or misleading our clients. Our company
            guarantees quality and customer satisfaction.
          </p>
          <p>
            We are proud to be fully licensed and insured, providing peace of
            mind with every service. Our team is dedicated to maintaining the
            highest standards of professionalism and integrity in all our
            interactions.
          </p>
          <p>
            At Driveway Blasters LLC, we believe in building long-term
            relationships with our clients based on trust and reliability. Our
            commitment to excellence ensures that your home receives the best
            care possible, enhancing its curb appeal and value.
          </p>

          <p>
            Whether you need high-pressure washing for tough stains or gentle
            soft washing for delicate surfaces, our team is equipped to handle
            it all. We take pride in our work and strive to exceed your
            expectations with every service.
          </p>
        </div>

        <h2 className="pt-3">Grow With Us</h2>
        <p
          className="dottedBorder pb-4 flex flex-col gap-3 w-[84%]
        pl-3"
        >
          As we continue to expand and refine our services, we are eager to
          bring our innovative cleaning solutions to more homes in the area.
          Join the countless homeowners who trust Driveway Blasters LLC to
          maintain and enhance their property. We are committed to providing the
          highest quality pressure washing services, ensuring your home looks
          its best year-round.
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
