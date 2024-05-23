import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function WindowsAndGutters() {
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
        <b>Spotless Window and Gutter Cleaning Services</b>
      </h1>
      <p className="lead mb-4">
        Driveway Blasters LLC provides <b>top-tier</b> window and gutter
        cleaning services across Orange, Riverside, and Los Angeles County.
        Emphasizing <b>safety</b> and <b>efficiency</b>, our team delivers{" "}
        <b>exceptional</b> cleaning without the hassle of doing it yourself.
      </p>

      <h2 className="mb-3">
        <b>Precision Window Cleaning</b>
      </h2>
      <p className="mb-4">
        We leverage state-of-the-art equipment and <b>eco-friendly</b> cleaning
        solutions to ensure your windows shine without <b>streaks</b> or{" "}
        <b>spots</b>. Our meticulous cleaning process includes:
        <ul>
          <li>Thorough washing of window glass, frames, and tracks.</li>
          <li>
            Use of purified water to eliminate mineral deposit buildup, ensuring
            a <b>spot-free</b> finish.
          </li>
          <li>
            Safe and effective techniques for both interior and exterior
            windows, enhancing natural light and visibility.
          </li>
        </ul>
      </p>

      <h2 className="mb-3">
        <b>Gutter Cleaning and Maintenance</b>
      </h2>
      <p className="mb-4">
        Clogged gutters can lead to water damage and foundation issues. Our
        comprehensive gutter cleaning services involve:
        <ul>
          <li>
            Removing <b>leaves, debris, and obstructions</b> to ensure proper
            water flow.
          </li>
          <li>
            Inspecting and clearing downspouts to prevent water buildup and
            potential damage.
          </li>
          <li>
            Optional <b>gutter guard installation</b> to reduce future debris
            accumulation.
          </li>
        </ul>
        Maintain your home’s health and prevent costly future repairs with our
        thorough gutter maintenance service.
      </p>

      <h2 className="mb-3">
        <b>Comprehensive Services for Every Need</b>
      </h2>
      <p className="mb-4">
        We offer specialized <b>Solar Panel Cleaning</b> as part of our
        comprehensive cleaning services, essential for:
        <ul>
          <li>
            <b>Maintaining Energy Efficiency:</b> Regular cleaning removes
            debris, dust, and bird droppings that can significantly decrease
            solar panel effectiveness.
          </li>
          <li>
            <b>Prolonging Panel Lifespan:</b> Keeping solar panels clean helps
            prevent damage and extends their useful life.
          </li>
          <li>
            <b>Enhancing Return on Investment:</b> Clean panels operate at peak
            efficiency, ensuring you get the best return on your solar energy
            investment.
          </li>
        </ul>
        This service is ideal for both residential and commercial properties
        looking to optimize their energy solutions and sustainability.
      </p>

      <h2 className="mb-3">
        <b>Why Professional Cleaning?</b>
      </h2>
      <p className="mb-4">
        Professional cleaning helps not only in enhancing the{" "}
        <b>curb appeal </b>
        but also in extending the life of your property’s external features.
        Regular maintenance prevents the buildup of harmful materials that can
        lead to expensive repairs, ensuring that your property remains a
        welcoming and safe space.
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

export default WindowsAndGutters;
