import WhyChooseUs from '../components/WhyChooseUs';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Offers from '../components/Offers';
import Testimonials from '../components/Testimonials';
import Faq from '@/components/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Pressure Washing Services | Orange & Riverside County | Driveway Blasters',
  description:
    'Expert pressure washing services in Orange County & Riverside. Driveway cleaning, house washing, roof cleaning. Licensed & insured. Free quotes!',
  openGraph: {
    title: 'Professional Pressure Washing Services | Orange County & Riverside',
    description:
      'Expert pressure washing services in Orange County & Riverside. Driveway cleaning, house washing, roof cleaning. Licensed & insured. Free quotes!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblaster.com/',
    siteName: 'Driveway Blasters LLC',
    images: [
      {
        url: 'https://www.drivewayblaster.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Professional Pressure Washing Services in Orange County by Driveway Blasters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Pressure Washing Services | Orange County & Riverside',
    description:
      'Expert pressure washing services in Orange County & Riverside. Driveway cleaning, house washing, roof cleaning. Licensed & insured. Free quotes!',
    images: ['https://www.drivewayblaster.com/opengraph-image.png'],
  },
  keywords: [
    'pressure washing Orange County',
    'pressure washing Riverside County',
    'pressure washing inland empire',
    'driveway cleaning near me',
    'house washing service',
    'roof cleaning Orange County',
    'commercial pressure washing',
    'residential pressure washing',
    'solar panel cleaning',
    'concrete cleaning service',
    'deck cleaning Orange County',
    'gutter cleaning service',
    'brick cleaning efflorescence',
  ],
};

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://www.drivewayblaster.com/#business',
              name: 'Driveway Blasters LLC',
              description:
                'Professional pressure washing and exterior cleaning services in Orange County and Riverside County.',
              url: 'https://www.drivewayblaster.com/',
              telephone: '+19494843698',
              email: 'drivewayblaster@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Orange County',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '33.8713',
                longitude: '-117.5949',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Orange County, CA',
                },
                {
                  '@type': 'City',
                  name: 'Riverside County, CA',
                },
              ],
              serviceType: [
                'Pressure Washing',
                'Driveway Cleaning',
                'House Washing',
                'Roof Cleaning',
                'Deck Cleaning',
                'Solar Panel Cleaning',
                'Window Cleaning',
                'Gutter Cleaning',
                'Brick Cleaning',
              ],
              priceRange: '$',
              openingHours: 'Mo-Su 10:00-20:00',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '6',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Pressure Washing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Pressure Washing',
                      description:
                        'Professional high-pressure cleaning for all exterior surfaces',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Driveway Cleaning',
                      description:
                        'Concrete driveway pressure washing and oil stain removal',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'House Washing',
                      description:
                        'Exterior house cleaning and soft washing services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Roof Cleaning',
                      description:
                        'Safe roof cleaning and moss removal services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Deck Cleaning',
                      description:
                        'Wood deck restoration and staining preparation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Solar Panel Cleaning',
                      description:
                        'Efficient solar panel cleaning to maximize energy output',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Window Cleaning',
                      description:
                        'Professional exterior window cleaning services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Gutter Cleaning',
                      description:
                        'Complete gutter cleaning and maintenance services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Brick Cleaning',
                      description:
                        'Specialized brick cleaning and efflorescence removal',
                    },
                  },
                ],
              },
            },
            {
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
                {
                  '@type': 'Question',
                  name: 'How much does pressure washing cost in Orange County?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pressure washing costs in Orange County typically range from $150-$400 for driveways and $200-$600 for house washing, depending on size and complexity. We provide free, accurate quotes for all services.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "What's the best time of year for pressure washing in Southern California?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "In Southern California's climate, pressure washing can be done year-round. However, spring and fall are ideal times as surfaces dry quickly and you can prepare for seasonal weather changes.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are you licensed and insured?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Driveway Blasters LLC is fully licensed and carries comprehensive liability insurance to protect both our customers and our team. We are insured for your peace of mind.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you offer same-day service?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we offer same-day service when possible and most jobs are completed within 24-72 hours of booking. Emergency cleaning services are also available for urgent needs.',
                  },
                },
              ],
            },
          ]),
        }}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Offers />
      <Faq />
    </>
  );
}
