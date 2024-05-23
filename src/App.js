import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceArea from "./components/ServiceArea";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

import DrivewayAndDeckRevival from "./components/Pages/DrivewaysAndDecks";
import HouseAndRoofCare from "./components/Pages/HouseAndRoof";
import WindowsAndGutters from "./components/Pages/WindowsAndGutters";
import ScrollToTop from "./components/ScrollToTop";
import Locations from "./components/Pages/Locations";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServiceArea />
              <Services />
              <Testimonials />
              <Faq />
            </>
          }
        />
        <Route
          path="/driveway-deck-revival"
          element={<DrivewayAndDeckRevival />}
        />
        <Route path="/house-roof-care" element={<HouseAndRoofCare />} />
        <Route path="/window-gutter-cleaning" element={<WindowsAndGutters />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
