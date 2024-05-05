import React, { useEffect, useRef, useState } from "react";

var services = [
  {
    title: "Driveway Cleaning",
    description:
      "Our advanced high-pressure washing techniques meticulously remove even the most stubborn dirt, grime, and stains from your driveway, restoring its pristine appearance.",
  },
  {
    title: "House Washing",
    description:
      "Utilizing a low-pressure soft wash approach, we delicately cleanse your home's exterior, safeguarding the integrity of your siding while effectively banishing accumulated pollutants.",
  },
  {
    title: "Deck Washing",
    description:
      "Employing state-of-the-art pressure washing technology, we expertly eliminate debris and discolorations from your deck, enhancing its longevity and aesthetic appeal.",
  },
  {
    title: "Roof Cleaning",
    description:
      "Our gentle yet effective soft washing service removes dirt, algae, and grime from your roof without compromising the durability of your shingles.",
  },
  {
    title: "Window Cleaning",
    description:
      "We use specialized window cleaning formulations to ensure a streak-free clarity for your windows, enhancing both interior and exterior views.",
  },
  {
    title: "Gutter Cleaning",
    description:
      "Our comprehensive gutter cleaning process removes leaves, debris, and obstructions, ensuring optimal functionality of your drainage system.",
  },
];

export default function Services() {
  const [intersectedIndices] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    // Initialize IntersectionObserver
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observerRef.current = observer;

    return () => {
      // Cleanup observer on component unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      const cards = document.querySelectorAll(".service");
      cards.forEach((card) => {
        observerRef.current.observe(card);
      });
    }
  }, [intersectedIndices]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  };

  return (
    <div className="services-container" id="Services">
      <h1>Services</h1>
      <div className="services">
        {services.map((service, index) => {
          return (
            <section className="service" key={index}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}
