import React from "react";
import { useLocation } from "react-router-dom";

function Locations() {
  const location = useLocation();
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
          <button
            className="btn btn-primary locations-btn"
            onClick={() =>
              location.pathname === "/"
                ? (window.location.href = "/contact")
                : null
            }
          >
            Get a Free Quote!
          </button>
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
        <button
          className="btn btn-primary mt-4 mb-4"
          onClick={() =>
            window.location.href = "/contact"
          }
        >
          Get a Free Quote!
        </button>
      </article>
    </section>
  );
}

export default Locations;
