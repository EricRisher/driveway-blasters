import React from "react";

function ServiceArea() {
  return (
    <div className="service-wrapper">
      <div className="service-text-container">
        <h1>
          <b>Driveway Blasters LLC</b>
        </h1>
        <h3 className="mt-3">
          Expert Pressure Washing Services Near Me in Orange, Riverside, and Los
          Angeles Counties.
        </h3>
        <p className="service-counties">
          Looking for Pressure Washing in Orange County? Driveway Blasters LLC is
          your premier choice for expert pressure washing services in <b>Los
          Angeles, Orange, and Riverside Counties</b>. From urban LA to scenic
          Orange County and sprawling Riverside, we deliver top-quality cleaning
          for residential and commercial properties. Enhance your property's
          cleanliness and curb appeal with our professional care today!
        </p>
      </div>
      <img
        src={require("../assets/images/servicing-counties.webp")}
        alt="service area"
        className="service-area-image"
      />
    </div>
  );
}

export default ServiceArea;
