import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/placeholder.jpg"),
    title: "lorem ipsum 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    link: "#",
  },
  {
    id: 2,
    image: require("../assets/images/placeholder.jpg"),
    title: "lorem ipsum 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    link: "#",
  },
  {
    id: 3,
    image: require("../assets/images/placeholder.jpg"),
    title: "lorem ipsum 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    link: "#",
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
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;