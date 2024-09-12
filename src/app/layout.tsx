import { Inter } from 'next/font/google';
import { Oswald } from 'next/font/google';
import Head from 'next/head';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.drivewayblasters.com/'),
  title: 'Top-Rated Pressure Washing & Softwash Services - Driveway Blasters:',
  description:
    'Top-rated pressure washing services in Orange, Riverside, and LA counties. Expert driveway, deck, house, roof, window, and gutter cleaning by Driveway Blasters LLC.',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  openGraph: {
    title: 'Top-Rated Pressure Washing & Softwash Services - Driveway Blasters',
    description:
      'Top-rated pressure washing services in Orange, Riverside, and LA counties. Expert driveway, deck, house, roof, window, and gutter cleaning by Driveway Blasters LLC.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drivewayblasters.com',
    site_name: 'Driveway Blasters LLC',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Driveway Blasters LLC',
              url: 'https://www.drivewayblasters.com',
              logo: 'https://www.drivewayblasters.com/favicon.ico', // update if needed
              telephone: '+1-949-484-3698', // update to your actual phone number
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
                reviewCount: '2', // Update with real data
              },
              priceRange: '$',
              openingHours: 'Mo,Tu,We,Th,Fr 10:00-20:00',
              description:
                'Top-rated pressure washing services in Orange, Riverside, and LA counties.',
              image: 'https://www.drivewayblasters.com/hero1.jpg', // Update to your hero image
              serviceType: 'Pressure Washing',
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
