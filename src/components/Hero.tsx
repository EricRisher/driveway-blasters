'use client';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';
interface HeroData {
  id: number;
  image: string;
}

const heroData: HeroData[] = [
  {
    id: 1,
    image: '/images/hero2.jpg',
  },
  {
    id: 2,
    image: '/images/hero3.jpeg',
  },
  {
    id: 3,
    image: '/images/hero6.webp',
  },

  {
    id: 5,
    image: '/images/hero5.jpeg',
  },
  {
    id: 7,
    image: '/images/hero7.webp',
  },
  {
    id: 8,
    image: '/images/hero8.jpg',
  },
  {
    id: 9,
    image: '/images/hero9.jpg',
  },
  {
    id: 10,
    image: '/images/hero10.jpg',
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel className="hero-carousel">
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <Image
              className="d-block w-100 hero-carousel"
              src={hero.image}
              alt={`slide ${hero.id}`}
              width={1920}
              height={1080}
              priority={hero.id === 1}
              loading={hero.id !== 1 ? 'lazy' : undefined}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="hero-text-block">
        <h1 className="hero-h1">
          Orange & Riverside County Pressure Washing Professionals
        </h1>
        <h2 className="hero-h2">
          Restore your home's curb appeal with Orange County's most trusted
          pressure washing company. From residential to commercial properties
          you'll be happy you called Driveway Blasters!
        </h2>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 sm:gap-2">
          <Link href="/contact" className="button hero-btn">
            Get A Free Quote!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                stroke="currentColor"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
          <div className="bg-[#4a8aea] rounded-3xl p-2 hover:scale-110 transition-transform duration-300 ease-in-out border-3 border-black">
            <a href="tel:+9493570197">
              <img src="/icons/phone-icon-w.png" />
            </a>
          </div>
        </div>
        <Image
          src="/icons/arrow-64.png"
          alt="arrow"
          width={48}
          height={48}
          className="arrow-icon"
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
