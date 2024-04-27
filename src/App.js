import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import ServiceArea from "./componets/ServiceArea";
import Services from "./componets/Services";
import ContactMe from "./componets/ContactMe";
import OurStory from "./pages/Our-Story";
import Pricing from "./pages/Pricing";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Hero />
        <ServiceArea />
        <Services />
        <ContactMe />
        <Footer />
      </Router>
    </>
  );
}

export default App;
