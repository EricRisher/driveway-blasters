import React from "react";
import check from "../assets/icons/check.png";
import { NavLink } from "react-router-dom";

const features = [
  {
    id: 1,
    description: "Expert in all settings, ready for any challenge.",
  },
  {
    id: 2,
    description: "Guaranteed satisfaction: we're not happy with the job until you are!",
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
        <NavLink to="/contact" className={`btn btn-primary mt-3 mb-5`}>
          Get Your Free Quote!
        </NavLink>
      </div>
    </div>
  );
}

export default ServiceArea;
