'use client';

import Carousel from 'react-bootstrap/Carousel';

const testimonials = [
  {
    id: 1,
    description:
      'They did my driveway and they did a really good job. I would recommend their services!',
    name: 'Yodi L.',
    city: 'Long Beach, CA',
    source: 'Yelp',
  },
  {
    id: 2,
    description:
      "I had a tenant's car leak oil onto the driveway. i contacted Jeremy and he did an awesome job cleaning it. He returned my call within 5 minutes and was able to do the job the next day. Service and quality are great. I would recommend to anyone that needs this service.",
    name: 'Patrick J.',
    city: 'Corona, CA',
    source: 'Yelp',
  },
  {
    id: 3,
    description:
      "Driveway Blasters did a great job on our patio! It was covered in pigeon poop after an infestation but after these guys did their work, you can't even tell there ever was any. Will definitely be recommending them to others.",
    name: 'David M.',
    city: 'Claremont, CA',
    source: 'Yelp',
  },
  {
    id: 4,
    description:
      "Very satisfied customer here! I had terrible oil stains from my old truck, some of them fresh - a couple of months old, and some were from two years back. The older stains specifically are too hard to remove. There were also a couple of gums that made my driveway look really ugly. Jeremy and Eric came on time as promised and did a great job. The driveway looks way better now, and the toughest stains can hardly be noticed. They make up a good team, they don't other reviews yet as of the time of my review, but they are definitely worth trying them out!",
    name: 'Ahmed Z.',
    city: 'Irvine, CA',
    source: 'Yelp',
  },
  {
    id: 5,
    description:
      'I had a great experience with Driveway Blasters. They were quick to respond, professional, and did an excellent job on my driveway. The oil stains are gone!',
    name: 'Brando M.',
    city: 'Laguna Hills, CA',
    source: 'Google',
  },
  {
    id: 6,
    description:
      "They cleaned my backyard patio and we're really happy with how it turned out. They gave us the best price we could find.",
    name: 'Will S.',
    city: 'Aliso Viejo, CA',
    source: 'Google',
  },
];

function Testimonials() {
  return (
    <section className="testimonial-block bg-gray-200 w-full">
      <h3 className="mt-4 racking-widest font-light">TESTIMONIALS</h3>
      <h2>
        <b>Our clients love us</b>
      </h2>
      <h3 className="text-md mt-2 mb-6 font-light">
        Here's some of what they had to say
      </h3>
      <section className="testimonial-wrapper">
        <article className="testimonial">
          <p>
            I had a tenant's car leak oil onto the driveway. i contacted Jeremy
            and he did an awesome job cleaning it. He returned my call within 5
            minutes and was able to do the job the next day. Service and quality
            are great. I would recommend to anyone that needs this service.
          </p>
          <span className="flex flex-row items-center gap-1">
            <img src="./images/5-stars.png" alt="5 stars" className="w-32" />
            by <b>Patrick J.</b> in Corona, CA
          </span>
        </article>

        <article className="testimonial">
          <p>
            Driveway Blasters did a great job on our patio! It was covered in
            pigeon poop after an infestation but after these guys did their
            work, you can't even tell there ever was any. Will definitely be
            recommending them to others.
          </p>
          <span className="flex flex-row items-center gap-1">
            <img src="./images/5-stars.png" alt="5 stars" className="w-32" />
            by <b>David M.</b> in Claremont, CA
          </span>
        </article>
        <article className="testimonial">
          <p>
            Very satisfied customer here! I had terrible oil stains from my old
            truck, some of them fresh - a couple of months old, and some were
            from two years back. The older stains specifically are too hard to
            remove. There were also a couple of gums that made my driveway look
            really ugly. Jeremy and Eric came on time as promised and did a
            great job. The driveway looks way better now, and the toughest
            stains can hardly be noticed. They make up a good team, they don't
            other reviews yet as of the time of my review, but they are
            definitely worth trying them out!
          </p>
          <span className="flex flex-row items-center gap-1">
            <img src="./images/5-stars.png" alt="5 stars" className="w-32" />
            by <b>Ahmed Z.</b> in Irvine, CA
          </span>
        </article>
      </section>
      <div className="testimonial-button-container">
        <button
        className='my-4'
          onClick={() =>
            window.open('https://g.page/r/CYdH_rgxt-9hEBM/review', '_blank')
          }
        >
          {' '}
          <img
            src="./icons/google-icon.webp"
            alt="google icon"
            width={32}
            height={32}
          ></img>
          Leave us a review
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
