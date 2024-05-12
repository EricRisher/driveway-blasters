import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
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
              <ContactMe />
            </>
          }
        />
        <Route
          path="/driveway-deck-revival"
          element={<DrivewayAndDeckRevival />}
        />
        <Route path="/house-roof-care" element={<HouseAndRoofCare />} />
        <Route path="/window-gutter-cleaning" element={<WindowsAndGutters />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
