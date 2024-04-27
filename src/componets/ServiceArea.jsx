import React from "react";

function ServiceArea() {
  return (
    <div className="service-wrapper">
      <div className="service-text-container">
        <h2>Driveway Blasters LLC</h2>
        <h4>
          <b>Service Area</b>
        </h4>
        <p className="service-counties">
          Driveway Blasters LLC proudly offers top-quality pressure washing
          services across <b>Los Angeles County</b>, <b>Orange County</b>, and <b>Riverside County</b>. We're committed to enhancing the cleanliness and curb appeal
          of both residential and commercial properties in these vibrant
          Southern California communities. Whether you're in urban LA, scenic
          Orange County, or sprawling Riverside, our expert team is ready to
          transform your property with professional care
        </p>
      </div>
      <img
        src={require("../assets/images/servicing-counties.png")}
        alt="service area"
        className="service-area-image"
      />
    </div>
  );
}

export default ServiceArea;
