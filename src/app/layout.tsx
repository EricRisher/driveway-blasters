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
  viewport: 'width=device-width, initial-scale=1',
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
  '@type': 'LocalBusiness',
  name: 'Driveway Blasters LLC',
  url: 'https://www.drivewayblaster.com',
  logo: 'https://www.drivewayblaste.com/favicon.ico',
  telephone: '+1-949-484-3698',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aliso Viejo',
    addressRegion: 'CA',
    postalCode: '92656',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '2',
  },
  priceRange: '$',
  openingHours: 'Mo,Tu,We,Th,Fr,Sat,Sun 10:00-20:00',
  description:
    'Top-rated pressure washing services in Orange and Riverside counties.',
  image:
    'https://www.drivewayblaster.com/_next/image?url=%2Fimages%2Fhero3.jpg&w=1920&q=75',
  makesOffer: {
    '@type': 'Offer',
    url: 'https://www.drivewayblaster.com/services/pressure-washing',
    priceCurrency: 'USD',
    itemOffered: {
      '@type': 'Service',
      name: 'Pressure Washing',
      description:
        'We provide professional pressure washing services for driveways, decks, and building exteriors.',
    },
  },
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
