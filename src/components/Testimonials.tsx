"use client";

import Carousel from "react-bootstrap/Carousel";

const testimonials = [
  {
    id: 1,
    description:
      'Driveway Blasters did a great job on my two story windows. They were very professional and I would recommend them to anyone.',
    name: 'Brando M.',
    city: 'Laguna Hills',
  },
  {
    id: 2,
    description:
      'Our patio and siding look brand new! Friendly team, added to my annual maintenance list.',
    name: 'Sarah M.',
    city: 'Riverside',
  },
  {
    id: 3,
    description:
      'I had my driveway and walkway cleaned by Driveway Blasters. They did a great job and were very professional.',
    name: 'Michael T.',
    city: 'Irvine',
  },
  {
    id: 4,
    description:
      "They did my two story roof and gutter cleaning with, they provided many pictures after the job which was very helpful. I'm very happy with the results.",
    name: 'Emily C.',
    city: 'Long Beach',
  },
  {
    id: 5,
    description:
      'Tough stains? No problem for Driveway Blasters! Courteous and thorough. Definitely recommend for pressure washing needs.',
    name: 'Will S.',
    city: 'Aliso Viejo',
  },
  {
    id: 6,
    description:
      'Driveway blasters really made a difference. Both punctional and professional, also great follow-up afterwards making sure I was satisfied.',
    name: 'Jonathan R.',
    city: 'Corona',
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
