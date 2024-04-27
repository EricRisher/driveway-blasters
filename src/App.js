import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import ServiceArea from "./componets/ServiceArea";
import ContactMe from "./componets/ContactMe";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <ServiceArea />
      <ContactMe />
    </>
  );
}

export default App;
