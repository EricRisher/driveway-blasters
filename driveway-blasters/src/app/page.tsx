"use server";

import WhyChooseUs from '../components/WhyChooseUs';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Faq from '@/components/Faq';

export default async function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Faq />
    </>
  );
}
