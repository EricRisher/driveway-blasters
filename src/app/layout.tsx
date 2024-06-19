import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { title } from 'process';

const inter = Inter({ subsets: ['latin'] });

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
