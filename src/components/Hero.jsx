import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/hero1.webp"),
    title: "lorem ipsum 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    link: "#",
  },
  {
    id: 2,
    image: require("../assets/images/hero2.webp"),
    title: "lorem ipsum 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    link: "#",
  },
  {
    id: 3,
    image: require("../assets/images/hero3.webp"),
    title: "lorem ipsum 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    link: "#",
  },
  {
    id: 4,
    image: require("../assets/images/hero4.webp"),
    title: "lorem ipsum 4",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    link: "#",
  }
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
    </section>
  );
}

export default AppHero;