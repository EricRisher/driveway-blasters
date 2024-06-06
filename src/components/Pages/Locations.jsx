import React from "react";
import { Link } from "react-router-dom";

function Locations() {
  return (
    <section className="location-container">
      <div className="bg-wrapper">
        <img
          src={require("../../assets/images/serviceareas.webp")}
          alt="service-img"
          className="service-area-bg-img"
        />
        <div className="hero-text-block">
          <h1 className="service-area-h1">Areas We Serve</h1>
          <Link
            to="/contact"
            className={`btn btn-primary locations-btn mt-3 mb-4`}
          >
            Get Your Free Quote!
          </Link>
        </div>
      </div>
      <img
        src={require("../../assets/images/servicing-counties.webp")}
        alt="service area"
        className="service-area-image"
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
        <Link to="/contact" className={`btn btn-primary mt-3 mb-4`}>
          Get Your Free Quote!
        </Link>
      </article>
    </section>
  );
}

export default Locations;
