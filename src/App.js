import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import ServiceArea from "./componets/ServiceArea";
import Services from "./componets/Services";
import ContactMe from "./componets/ContactMe";
import Faq from "./componets/Faq";
import Footer from "./componets/Footer";
import Testimonials from "./componets/Testimonials";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Hero />
        <ServiceArea />
        <Services />
        <Testimonials />
        <Faq />
        <ContactMe />
        <Footer />
      </Router>
    </>
  );
}

export default App;
