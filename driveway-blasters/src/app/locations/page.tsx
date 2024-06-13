import Link from 'next/link';
import Image from 'next/image';
import serviceAreas from '../../../public/images/serviceareas.webp';
import servicingCounties from '../../../public/images/servicing-counties.webp';

const Locations: React.FC = () => {
  return (
    <section className="location-container">
      <div className="bg-wrapper">
        <Image
          src={serviceAreas}
          alt="service-img"
          className="service-area-bg-img"
          placeholder="blur"
        />
        <div className="hero-text-block">
          <h1 className="service-area-h1">Areas We Serve</h1>
          <Link
            href="/contact"
            className="button btn-primary locations-btn mt-3 mb-4"
            passHref
          >
            Get Your Free Quote!
          </Link>
        </div>
      </div>
      <Image
        src={servicingCounties}
        alt="service area"
        className="service-area-image"
        placeholder="blur"
      />
      <article className="service-area-article">
        <h3 className="service-counties-h3 mt-5">Orange County:</h3>
        <p className="service-cities">
          Anaheim - Santa Ana - Irvine - Huntington Beach - Costa Mesa - Orange
          - Fullerton - Mission Viejo - Newport Beach - Garden Grove
        </p>
        <h3 className="service-counties-h3 mt-5">Riverside County:</h3>
        <p className="service-cities">
          Riverside - Corona - Moreno Valley - Temecula - Murrieta - Palm
          Springs - Perris - Lake Elsinore - Indio - Hemet
        </p>
        <h3 className="service-counties-h3 mt-5">Los Angeles County:</h3>
        <p className="service-cities">
          Los Angeles - Long Beach - Pasadena - Santa Monica - Burbank -
          Glendale - Pomona - Torrance - Whittier - Lancaster
        </p>
        <h4 className="mt-5">+ All Surrounding Cities!</h4>

        <h2 className="text-center mt-5">Eager to Enhance Your Curb Appeal?</h2>
        <Link href="/contact" className="button btn-primary mt-3 mb-4" passHref>
          Get Your Free Quote!
        </Link>
      </article>
    </section>
  );
};

export default Locations;
