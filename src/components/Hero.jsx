import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

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
          RELIABLE - HIGH PRESSURE & SOFT WASH EXPERTS
        </h1>
        <h2 className="hero-h2">
          Bring New Life to Your Surfaces with Our Comprehensive Cleaning
          Services!
        </h2>
        <button
          className="btn btn-primary hero-btn mt-3"
          onClick={() =>
            location.pathname === "/"
              ? (window.location.href = "/contact")
              : null
          }
        >
          Get a Free Quote!
        </button>
      </div>
    </section>
  );
}

export default AppHero;
