import WhyChooseUs from '../components/WhyChooseUs';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Faq from '@/components/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top-Rated Pressure Washing in Orange County | Driveway Blasters',
  description:
    'Driveway Blasters LLC has delivered countless pressure washing serives to our customers. Serving Riverside, Los Angeles, and Orange County. Get a free quote today!',
  openGraph: {
    title: 'Top-Rated Pressure Washing in Orange County | Driveway Blasters',
    description:
      'Driveway Blasters LLC has delivered countless pressure washing serives to our customers. Serving Riverside, LA, and Orange County. Get a free quote today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblaster.com/deck-cleaning',
    siteName: 'Driveway Blasters LLC',
    images: [
      {
        url: 'https://www.drivewayblaster.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Driveway Blasters LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top-Rated Pressure Washing in Orange County | Driveway Blasters',
    description:
      'Driveway Blasters LLC has delivered countless pressure washing serives to our customers. Serving Riverside, LA, and Orange County. Get a free quote today!',
    images: ['https://www.drivewayblaster.com/opengraph-image.png'],
  },
  keywords: [
    'pressure washing',
    'deck cleaning',
    'driveway cleaning',
    'house washing',
    'roof cleaning',
    'concrete cleaning',
    'pressure washing near me',
    'pressure washing in Orange County',
    'pressure washing in Riverside County',
    'pressure washing in Los Angeles County',
  ],
};

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
      <link
        rel="preload"
        href="/public/fonts/Oswald-VariableFont_wght.ttf"
        as="font"
        type="font/woff2"
      ></link>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
    </>
  );
}
