"use client";

import Carousel from "react-bootstrap/Carousel";

const testimonials = [
  {
    id: 1,
    description:
      "I was thrilled with the job Driveway Blasters did on my home's exterior and driveway. They showed up on time, were super professional, and didn’t miss a spot. I’d definitely recommend them if you’re looking to freshen up your property!",
    name: "Brando M.",
    city: "Laguna Hills",
  },
  {
    id: 2,
    description:
      "Driveway Blasters really brought our patio and siding back to life! Everyone on the team was pleasant and respectful. I’m already planning to book them again for next year!",
    name: "Sarah M.",
    city: "Riverside",
  },
  {
    id: 3,
    description:
      "I was amazed at how much better my house looked after Driveway Blasters worked their magic on our walkways and facade. Their pricing was clear, and setting up the service was a breeze. Definitely a top-notch company!",
    name: "Michael T.",
    city: "Irvine",
  },
  {
    id: 4,
    description:
      "Driveway Blasters did an efficient job cleaning our roof and gutters, and they provided photos to show the before and after. I was impressed with their professionalism and the quality of their work. I'm definitely a returning customer!",
    name: "Emily C.",
    city: "Long Beach",
  },
  {
    id: 5,
    description:
      "Choosing Driveway Blasters to clean my property was a fantastic decision. They tackled some tough stains with ease and were both courteous and thorough throughout. I highly recommend them for anyone in need of quality pressure washing.",
    name: "Will S.",
    city: "Aliso Viejo",
  },
  {
    id: 6,
    description:
      "What a difference Driveway Blasters made on our home’s exterior—it's like night and day! They were prompt and professional, and their follow-up was excellent. I can’t recommend them enough!",
    name: "Jonathan R.",
    city: "Corona",
  },
];

function Testimonials() {
  return (
    <section className="testimonial-block">
      <h1 className="testimonial-cta mt-4">
        See What Your Neighbors Are Saying!
      </h1>
      <Carousel interval={9000}>
        {testimonials.map((testimonial) => {
          return (
            <Carousel.Item key={testimonial.id}>
              <div className="testimonial-card">
                <p className="testimonial-description">
                  {testimonial.description}
                </p>
                <h2 className="testimonial-name"> - {testimonial.name}</h2>
                <h3 className="testimonial-city">{testimonial.city}</h3>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Testimonials;
