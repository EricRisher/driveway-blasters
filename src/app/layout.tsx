import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Fonts
const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'], weight: '400' });

// Metadata API for Next.js 14
export const metadata = {
  title: 'Top-Rated Pressure Washing & Softwash Services - Driveway Blasters',
  description:
    'Top-rated pressure washing services in Orange, Riverside, and LA counties. Expert driveway, deck, house, roof, window, and gutter cleaning by Driveway Blasters LLC.',
  keywords:
    'pressure washing, soft washing, driveway cleaning, roof cleaning, deck cleaning, gutter cleaning, window cleaning, Riverside, Orange County',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes',
  charset: 'UTF-8',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Top-Rated Pressure Washing & Softwash Services - Driveway Blasters',
    description:
      'Top-rated pressure washing services in Orange, Riverside, and LA counties. Expert driveway, deck, house, roof, window, and gutter cleaning by Driveway Blasters LLC.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblaster.com',
    siteName: 'Driveway Blasters LLC',
    images: [
      {
        url: 'https://www.drivewayblaster.com/_next/image?url=%2Fimages%2Fhero3.jpg&w=1920&q=75',
        width: 1200,
        height: 630,
        alt: 'Driveway Blasters Hero Image - Pressure Washing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top-Rated Pressure Washing & Softwash Services - Driveway Blasters',
    description:
      'Top-rated pressure washing services in Orange, Riverside, and LA counties. Expert driveway, deck, house, roof, window, and gutter cleaning by Driveway Blasters LLC.',
    images: [
      'https://www.drivewayblaster.com/_next/image?url=%2Fimages%2Fhero3.jpg&w=1920&q=75',
    ],
  },
};

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.drivewayblaster.com/#business',
      name: 'Driveway Blasters',
      url: 'https://www.drivewayblaster.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.drivewayblaster.com/#logo',
        url: 'https://www.drivewayblaster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo%20and%20name.f199d656.png&w=3840&q=75',
        caption: 'Driveway Blasters',
      },
      image: {
        '@id': 'https://www.drivewayblaster.com/#logo',
      },
      description:
        'Professional pressure washing and roof cleaning services in Riverside, and Orange County. Eco-friendly and safe techniques.',
      telephone: '949-484-3698',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Aliso Viejo',
        addressRegion: 'CA',
        postalCode: '92656',
      },
      areaServed: ['Riverside', 'Orange County'],
      priceRange: '$',
      openingHours: 'Mo-Sun 10:00-20:00',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Ahmed Zahran',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      reviewBody:
        "Very satisfied customer here! I had terrible oil stains from my old truck, some of them fresh - a couple of months old, and some were from two years back. The older stains specifically are too hard to remove. There were also a couple of gums that made my driveway look really ugly. Jeremy and Eric came on time as promised and did a great job. The driveway looks way better now, and the toughest stains can hardly be noticed. They make up a good team, they don't other reviews yet as of the time of my review, but they are definitely worth trying them out!",
      itemReviewed: {
        '@id': 'https://www.drivewayblaster.com/#business',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.drivewayblaster.com/#website',
      url: 'https://www.drivewayblaster.com',
      name: 'Driveway Blasters',
      publisher: {
        '@id': 'https://www.drivewayblaster.com/#business',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.drivewayblaster.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: '1',
          item: {
            '@id': 'https://www.drivewayblaster.com',
            name: 'Home',
          },
        },
        {
          '@type': 'ListItem',
          position: '2',
          item: {
            '@id': 'https://www.drivewayblaster.com/roof-cleaning/',
            name: 'Roof Cleaning',
          },
        },
        {
          '@type': 'ListItem',
          position: '3',
          item: {
            '@id': 'https://www.drivewayblaster.com/driveway-revival/',
            name: 'Expert Driveway Cleaning Services',
          },
        },
        {
          '@type': 'ListItem',
          position: '4',
          item: {
            '@id': 'https://www.drivewayblaster.com/service-areas',
            name: 'Service Areas',
          },
        },
        {
          '@type': 'ListItem',
          position: '5',
          item: {
            '@id': 'https://www.drivewayblaster.com/contact',
            name: 'Contact Us',
          },
        },
      ],
    },
  ],
};

// RootLayout component with Metadata API
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
