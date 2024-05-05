import Carousel from "react-bootstrap/Carousel";

var testimonials = [
  {
    id: 1,
    description:
      "I recently hired Driveway Blasters LLC for a comprehensive cleaning of my home's exterior and driveway, and the results were nothing short of spectacular. Not only did they manage to completely eradicate years of built-up dirt and mildew, but they also accommodated my schedule and were incredibly professional throughout the process. Their punctuality and attention to detail did not go unnoticed. I wholeheartedly recommend their services to anyone looking to rejuvenate their property!",
    name: "Jonathan R.",
    city: "Anaheim (Orange County)"
  },
  {
    id: 2,
    description:
      "Driveway Blasters LLC came highly recommended, and they did not disappoint! They transformed our aging patio and siding, making them look brand new. Their team was friendly, efficient, and very respectful of our property, ensuring everything was left just as they found it, only cleaner. It's rare to see such dedication and pride in workmanship. I'm looking forward to booking them again next year!",
    name: "Sarah M.",
    city: "Riverside (Riverside County)"
  },
  {
    id: 3,
    description:
      "As a first-time homeowner, I was unsure about the need for professional pressure washing, but the results delivered by Driveway Blasters LLC have made me a believer. The curb appeal of my house has improved dramatically, thanks to their meticulous work on our walkways and facade. Their transparent pricing and quick service setup were also appreciated. A top-notch choice for any home maintenance needs!",
    name: "Michael T.",
    city: "Irvine (Orange County)"
  },
  {
    id: 4,
    description:
      "After noticing how dirty our roof and gutters had become, I called Driveway Blasters LLC, and they were quick to respond and even quicker to get the job done. Their team not only cleaned our roof thoroughly but also took before and after photos to show us the difference. It was impressive to see such professionalism and skill from a local company. Their services are a great value for the quality provided, and I’ll certainly be using them again!",
    name: "Emily C.",
    city: "Long Beach (Los Angeles County)"
  },
  {
    id: 5,
    description:
      "I've been contemplating getting my property professionally cleaned for a while and finally decided to go with Driveway Blasters LLC. What a fantastic decision that was! They treated my home with the utmost care, and their work on the brickwork and driveway was exceptional. They managed to remove tough stains that I thought were permanent. The team was knowledgeable, courteous, and thorough. If you’re on the fence about whom to choose for your pressure washing needs, I can assure you Driveway Blasters won’t disappoint!",
    name: "Grace H.",
    city: "Santa Monica (Los Angeles County)"
  },
  {
    id: 6,
    description:
      "Choosing Driveway Blasters LLC to handle the pressure washing of our family home was a great choice. The difference is like night and day. They effectively removed years of dirt from our deck and sidings, enhancing the beauty of our home’s exterior immensely. The crew was prompt, well-equipped, and very professional. Plus, their follow-up to ensure satisfaction was a touch that truly sets them apart. Highly recommended for anyone looking to give their home a fresh, clean look!",
    name: "Jonathan R.",
    city: "Corona (Riverside County)"
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
