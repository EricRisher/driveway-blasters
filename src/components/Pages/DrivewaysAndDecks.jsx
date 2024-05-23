import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function DrivewayAndDeckRevival() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");

    // Check if already on the home page and just scroll to the contact
    if (location.pathname === "/" && window.location.hash !== "#Contact") {
      window.location.hash = "Contact";
      setTimeout(() => {
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      navigate("/#Contact");
      setTimeout(() => {
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <div className="container mt-3">
      <h1 className="mb-4 text-center">
        <b>Enhance Your Curb Appeal</b>
      </h1>
      <h2 className="mb-3">
        <b> Transformative Cleaning Services in Servicing Counties</b>
      </h2>
      <p className="mb-4">
        At Driveway Blasters LLC, we excel in driveway and sidewalk cleaning
        services that enhance both the appearance and safety of your property.
        Using advanced pressure washing techniques, we effectively remove
        unsightly stains and hazards.
      </p>

      <h2 className="mb-3">
        <b>Comprehensive Removal of All Impurities</b>
      </h2>
      <p className="mb-4">
        We expertly remove:
        <ul className="mb-4">
          <li>
            <b>Algae,</b> which can create slippery surfaces.
          </li>
          <li>
            <b>Mold and mildew</b> that degrade surface integrity and can cause
            health issues.
          </li>
          <li>
            <b>Oil and vehicle fluid stains</b> that can permanently damage your
            property's appearance.
          </li>
          <li>
            <b>Rust and other mineral deposits</b> that can etch and weaken
            concrete and stone.
          </li>
        </ul>
        Our services are designed to tackle these and other stubborn stains with
        precision, restoring your surfaces to their pristine condition.
      </p>

      <h2 className="mb-3">
        <b>We Clean All Types of Materials</b>
      </h2>
      <p className="mb-4">
        Our team is trained to clean a variety of materials, including:
        <ul className="mb-4">
          <b>
            <li>Concrete</li>
            <li>Asphalt</li>
            <li>Brick</li>
            <li>Stone</li>
            <li>Pavers</li>
            <li>Flagstone</li>
            <li>Wood</li>
          </b>
        </ul>
        Whether your paths are made of traditional concrete or upscale paver
        stones, our advanced cleaning techniques are{" "}
        <b>safe, effective, and tailored</b> to meet the specific needs of each
        material.
      </p>

      <h2 className="mb-3">
        <b>Why Regular Cleaning Matters</b>
      </h2>
      <p className="mb-4">
        Regular cleaning of your driveway and sidewalks enhances curb appeal,
        extends their lifespan, and improves safety. It prevents the
        accumulation of harmful materials that degrade surfaces over time.
        Benefits of our professional cleaning services include:
        <ul className="mb-4">
          <li>
            <b>Enhanced Safety:</b> Reduce the risk of slips and falls on your
            property with regular removal of slippery algae and mold.
          </li>
          <li>
            <b>Increased Durability:</b> Preventative maintenance extends the
            life of your surfaces, saving you money on future repairs.
          </li>
          <li>
            <b>Improved Aesthetics:</b> A clean exterior increases property
            value and makes your home or business more welcoming to guests and
            customers.
          </li>
        </ul>
      </p>

      <p className="mb-4">
        Ready to transform your property’s look and safety? Contact Driveway
        Blasters LLC for a free quote and discover the impact of our
        professional cleaning services.
      </p>
      <div className="d-flex justify-content-center">
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

export default DrivewayAndDeckRevival;
