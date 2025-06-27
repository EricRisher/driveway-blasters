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
          LA, Orange & Riverside County Pressure Washing
        </h1>
        <h2 className="hero-h2">
          Instantly restore your home's curb appeal with Orange
          County's most trusted pressure washing company. Get fast, reliable,
          and spotless pressure washing services in seconds! - Insured
          & Student Owned
        </h2>

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
