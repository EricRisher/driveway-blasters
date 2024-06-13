import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Hero from "../../driveway-blasters/src/componets/Hero";
import Navbar from "../../driveway-blasters/src/componets/Navbar";
import ServiceArea from "../../driveway-blasters/src/componets/ServiceArea";
import Services from "../../driveway-blasters/src/componets/Services";
import ContactMe from "../../driveway-blasters/src/componets/ContactMe";
import Faq from "../../driveway-blasters/src/componets/Faq";
import Footer from "../../driveway-blasters/src/componets/Footer";
import Testimonials from "../../driveway-blasters/src/componets/Testimonials";

import DrivewayAndDeckRevival from "./components/Pages/DrivewaysAndDecks";
import HouseAndRoofCare from "./components/Pages/HouseAndRoof";
import Windows from "./components/Pages/Windows";
import ScrollToTop from "../../driveway-blasters/src/componets/ScrollToTop";
import Locations from "./components/Pages/Locations";
import Gutters from "./components/Pages/Gutters";
import AboutUs from "./components/Pages/AboutUs";

function App() {
  const navigate = useNavigate(); // Hook from react-router-dom to handle navigation

  // Handle redirection if there's a redirect path stored in sessionStorage
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect; // Clear the redirect from storage to prevent loops
    if (redirect && redirect !== window.location.href) {
      navigate(redirect.substring(window.location.origin.length)); // Navigate to the stored path
    }
  }, [navigate]);
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
        <Route path="/windows" element={<Windows />} />
        <Route path="/gutters" element={<Gutters />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
