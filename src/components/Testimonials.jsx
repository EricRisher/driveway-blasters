import Carousel from "react-bootstrap/Carousel";

var testimonials = [
  {
    id: 1,
    description:
      "Driveway Blasters LLC did a spectacular job cleaning my home's exterior and driveway. They were punctual, professional, and thorough. Highly recommended for rejuvenating your property!",
    name: "Jonathan R.",
    city: "Anaheim (Orange County)",
  },
  {
    id: 2,
    description:
      "Driveway Blasters transformed our patio and siding, making them look new again. The team was friendly and respectful. I’m eager to use their services again next year!",
    name: "Sarah M.",
    city: "Riverside (Riverside County)",
  },
  {
    id: 3,
    description:
      "The curb appeal of my home improved dramatically after Driveway Blasters cleaned our walkways and facade. Transparent pricing and quick service setup. A top-notch choice!",
    name: "Michael T.",
    city: "Irvine (Orange County)",
  },
  {
    id: 4,
    description:
      "Driveway Blasters quickly cleaned our roof and gutters, providing before and after photos. Their professionalism and quality are impressive. I’ll certainly use them again!",
    name: "Emily C.",
    city: "Long Beach (Los Angeles County)",
  },
  {
    id: 5,
    description:
      "Fantastic decision to choose Driveway Blasters for cleaning my property. They removed tough stains and were courteous and thorough. Highly recommend for top-notch pressure washing.",
    name: "Grace H.",
    city: "Santa Monica (Los Angeles County)",
  },
  {
    id: 6,
    description:
      "Driveway Blasters made a dramatic difference on our home’s exterior, removing years of dirt. The team was prompt and professional, with excellent follow-up. Highly recommended!",
    name: "Jonathan R.",
    city: "Corona (Riverside County)",
  },
];


function Testimonials() {
  return (
    <section className="testimonial-block">
      <h1 className="testimonial-cta">See What Your Neighbors Are Saying!</h1>
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
