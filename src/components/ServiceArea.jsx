import React from "react";
import { useLocation } from "react-router-dom";
import check from "../assets/icons/check.png";

const features = [
  {
    id: 1,
    description: "Expert in all settings, ready for any challenge",
  },
  {
    id: 2,
    description: "Guaranteed satisfaction: our clients love us!",
  },
  {
    id: 3,
    description: "Fast, easy online quoting for quick and precise estimates.",
  },
  {
    id: 4,
    description: "Transparent, consistent pricing, online or in-person.",
  },
  {
    id: 5,
    description:
      "Eco-friendly methods safely clean and protect the environment.",
  },
];
function ServiceArea() {
  const location = useLocation();
  return (
    <div className="service-wrapper">
      <div className="service-text-container">
        <h2>
          <b>Why Choose Driveway Blasters LLC?</b>
        </h2>

        <div className="service-features mt-3">
          {features.map((feature) => {
            return (
              <div key={feature.id} className="service-feature ">
                <img src={check} alt="checkmark" />
                <p className="service-feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <p className="service-counties mt-3">
          Tired of dirt and grime? Let Driveway Blasters bring the shine! We're
          your go-to experts for both residential & commercial pressure washing.
          Reach out today and see the difference we can make!
        </p>

        <button
          className="btn btn-primary pagesQuoteBtn mb-5"
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
  );
}

export default ServiceArea;
