import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Driveway Blasters LLC - Expert Pressure Washing Services in Orange, Riverside, and Los Angeles Counties',
  description:
    'Top driveway cleaning in Orange, Los Angeles, and Riverside Counties. Eco-friendly solutions for tough stains like oil and rust. Get your free quote today!',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
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
      </body>
    </html>
  );
}
