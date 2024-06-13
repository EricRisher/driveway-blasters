"use client";

import Image from "next/image";
import Link from "next/link";
import check from "../../public/icons/check.png";

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
    description: "Eco-friendly methods safely clean and protect the environment.",
  },
];

function WhyChooseUs() {
  return (
    <div className="service-wrapper">
      <div className="service-text-container">
        <h2>
          <b>Why Choose Driveway Blasters LLC?</b>
        </h2>

        <div className="service-features mt-3">
          {features.map((feature) => (
            <div key={feature.id} className="service-feature ">
              <Image src={check} alt="checkmark" width={20} height={20} />
              <p className="service-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="button btn-primary mt-3 mb-5" passHref>Get Your Free Quote!
        </Link>
      </div>
    </div>
  );
}

export default WhyChooseUs;
