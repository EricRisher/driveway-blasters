import React from 'react';
import BlogHero from '@/components/BlogHero';

const posts = [
  {
    title:
      'Stunning Pressure Washing Before and After Transformations Near You!',
    date: 'September 10, 2024',
    city: 'Orange County, CA',
    excerpt:
      "Explore the stunning transformations achieved through our driveway cleaning services. See how we turn grimy, stained driveways into spotless surfaces that enhance your home's curb appeal.",
    image: '/images/beforeafterconcrete.jpeg',
    link: '/blog/driveway-cleaning-before-after-transformations-los-angeles',
  }
];

const wipPosts = [
  {
    title: 'Soft Washing vs. Pressure Washing: Which is Better for Your Home?',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Discover the differences between soft washing and pressure washing, and learn which method is best suited for your home’s exterior surfaces. We break down the pros and cons of each technique to help you make an informed decision.',
    image: '/images/deck-cleaning.jpg',
    link: '/blog/deck-cleaning',
  },
  {
    title: 'Why Soft Washing Is Ideal for Cleaning Your Roof and Siding',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Soft washing is a gentle yet effective method for cleaning your roof and siding. Unlike pressure washing, which can damage delicate surfaces, soft washing uses low-pressure water combined with specialized cleaning solutions to safely remove algae, mold, and grime.',
    image: '/images/roof-cleaning.jpg',
    link: '/blog/roof-cleaning',
  },
  {
    title: 'Signs Your Roof Needs Professional Cleaning',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Is your roof looking a little worse for wear? Here are some common signs that indicate it’s time to call in the professionals for a thorough cleaning. From discoloration to moss growth, learn what to look for to keep your roof in top condition.',
    image: '/images/roof-cleaning.jpg',
    link: '/blog/signs-your-roof-needs-cleaning',
  },
  {
    title: 'The Benefits of Regular Gutter Cleaning',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Keeping your gutters clean is essential for preventing water damage to your home. Learn about the benefits of regular gutter cleaning, including improved drainage, reduced risk of pests, and extended lifespan of your gutters.',
    image: '/images/gutter-cleaning.jpg',
    link: '/blog/benefits-of-gutter-cleaning',
  },
  {
    title: 'Why Your Business Needs Regular Pressure Washing',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Regular pressure washing is crucial for maintaining a professional appearance for your business. It helps remove dirt, grime, and stains from sidewalks, parking lots, and building exteriors, creating a welcoming environment for customers and clients.',
    image: '/images/business-pressure-washing.jpg',
    link: '/blog/business-pressure-washing',
  },
  {
    title: 'How Much Does It Cost to Pressure Wash Your Driveway?',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Wondering about the cost of pressure washing your driveway? In this blog post, we break down the factors that influence the price, including size, condition, and location. Get a clear understanding of what to expect when budgeting for this essential home maintenance service.',
    image: '/images/driveway-cost.jpg',
    link: '/blog/cost-to-pressure-wash-driveway',
  },
  {
    title: 'The Ultimate Guide to Pressure Washing Your Home',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Pressure washing can be a game-changer for your home’s exterior. In this comprehensive guide, we cover everything you need to know about pressure washing, including the best techniques, equipment, and safety tips to ensure a successful cleaning job.',
    image: '/images/pressure-washing-guide.jpg',
    link: '/blog/ultimate-guide-to-pressure-washing',
  },
  {
    title: '5 Reasons to Schedule Residential Power Washing Annually',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Keeping your home looking its best requires regular maintenance. Here are five compelling reasons to schedule residential power washing annually. From enhancing curb appeal to preventing damage, discover why this service is essential for homeowners.',
    image: '/images/residential-power-washing.jpg',
    link: '/blog/5-reasons-to-schedule-residential-power-washing-annually',
  },
  {
    title: 'How Soft Washing Protects Your Roof from Damage',
    date: 'October 10, 2023',
    city: 'Los Angeles, CA',
    excerpt:
      'Soft washing is not only effective for cleaning your roof but also plays a crucial role in protecting it from damage. By using low-pressure water and specialized cleaning solutions, soft washing removes harmful algae, mold, and mildew without the risk of damaging shingles or roofing materials.',
    image: '/images/soft-washing-roof.jpg',
    link: '/blog/how-soft-washing-protects-your-roof-from-damage',
  },
];

function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-hero-image">
        <h1 className="blog-h1">
          Project <span>Showcase</span>{' '}
        </h1>
      </div>


      <section className="blog-content">
        <h2>Out Latest Projects</h2>

        <div className="blog-posts">
          {posts.map((post, index) => (
            <div key={index} className="blog-post">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image mr-4"
              ></img>
              <article>
                <h3 className="blog-post-title">{post.title}</h3>
                <span className="blog-post-info">
                  <h4 className="blog-post-date">{post.date}</h4>
                  <h4 className="blog-city-zip">{post.city}</h4>
                </span>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-post-link">
                  Read More
                </a>
              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
