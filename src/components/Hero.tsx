'use client';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';

import PhoneIcon from '../../public/icons/phone-icon.png';
interface HeroData {
  id: number;
  image: string;
}

const heroData: HeroData[] = [
  {
    id: 1,
    image: '/images/hero1.webp',
  },
  {
    id: 2,
    image: '/images/hero2.webp',
  },
  {
    id: 3,
    image: '/images/hero3.webp',
  },
  {
    id: 4,
    image: '/images/hero4.webp',
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <Image
              className="d-block w-100"
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
          Orange & Riverside County Pressure Washing Experts
        </h1>
        <h2 className="hero-h2">
          <span className="divider"></span>
          Instantly Restore The Shine of Your Home With The Click of a Button!
        </h2>

        <div
          className="button-container"
          style={{ display: 'flex', gap: '20px' }}
        >
          <Link href="/contact" className="button btn-primary hero-btn">
            Get Your Free Quote!
          </Link>

          <Link href="tel:9494843698" className="button btn-secondary hero-btn">
            (949) 484-3698
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
