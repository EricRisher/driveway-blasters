"use server";

import WhyChooseUs from '../components/WhyChooseUs';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Faq from '@/components/Faq';
import Head from 'next/head';


export default async function Home() {
  return (
    <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How often should I have my property pressure washed?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We generally recommend pressure washing at least once a year to maintain the appearance and integrity of your property. However, this can vary based on your location and environmental factors such as exposure to dirt and weather conditions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do you price your services?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our pricing is based on the size and type of property, as well as the specific services required. We offer free, no-obligation quotes to provide you with accurate pricing tailored to your needs.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can pressure washing remove all stains?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'While pressure washing is highly effective at removing dirt, grime, and most stains, some stubborn stains may require additional treatment. We offer a range of cleaning solutions to tackle even the toughest stains.',
                  },
                  
                },
              ],
            }),
          }}
        />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Faq />
    </>
  );
}
