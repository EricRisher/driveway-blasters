import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/hero1.webp"),
    hero: "Top-Quality Pressure Washing. Boost Your Curb Appeal Today!",
  },
  {
    id: 2,
    image: require("../assets/images/hero2.webp"),
    hero: "Top-Quality Pressure Washing. Boost Your Curb Appeal Today!",
  },
  {
    id: 3,
    image: require("../assets/images/hero3.webp"),
    hero: "Top-Quality Pressure Washing. Boost Your Curb Appeal Today!",
  },
  {
    id: 4,
    image: require("../assets/images/hero4.webp"),
    hero: "Top-Quality Pressure Washing. Boost Your Curb Appeal Today!",
  },
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block"
                src={hero.image}
                alt={"slide " + hero.id}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="hero-text-block">
        <h1 className="hero-h1">
          Orange, LA and Riverside County's Best Exterior Cleaners
        </h1>
        <h2 className="hero-h2">
          Instantly Restore The Shine of Your Home With The Click of a Button!
        </h2>
        <Link className="btn btn-primary hero-btn" to="/contact">
          Get Your Free Quote!
        </Link>
      </div>
    </section>
  );
}

export default AppHero;
