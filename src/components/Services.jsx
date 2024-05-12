import React, { Component, useEffect, useRef, useState } from "react";
import ReactCompareImage from "react-compare-image";

import drivewayBefore from "../assets/images/drivewaybefore.webp";
import drivewayAfter from "../assets/images/drivewayafter.webp";

import housewashBefore from "../assets/images/housewashbefore.webp";
import housewashAfter from "../assets/images/housewashafter.webp";

import guttersBefore from "../assets/images/beforegutters.webp";
import guttersAfter from "../assets/images/aftergutters.webp";

var services = [
  {
    title: "Driveway & Deck Revival",
    description:
      "Restore the beauty of your outdoor surfaces with our advanced pressure washing techniques that tackle the toughest stains.",
    before: drivewayBefore,
    after: drivewayAfter,
    href: "/driveway-deck-revival",
  },
  {
    title: "House & Roof Care",
    description:
      "Protect and beautify your home from top to bottom with our gentle yet effective washing services, tailored to safeguard your siding and shingles.",
    before: housewashBefore,
    after: housewashAfter,
    href: "/house-roof-care",
  },
  {
    title: "Window & Gutter Clarity",
    description:
      "Enhance your view and protect your home with our specialized cleaning services, ensuring clear windows and functional gutters.",
    before: guttersBefore,
    after: guttersAfter,
    href: "/window-gutter-cleaning",
  },
];

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".service");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-container" id="Services">
      <h1>Services</h1>
      <div className="services">
        {services.map((service, index) => (
          <section className="service" key={index}>
            <h2>{service.title}</h2>
            <div className="imageWrapper">
              <ReactCompareImage
                leftImage={service.before}
                rightImage={service.after}
              />
            </div>
            <p>{service.description}</p>
            <a href={service.href} className="btn btn-primary w-100">
              Learn More!
            </a>{" "}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Services;
