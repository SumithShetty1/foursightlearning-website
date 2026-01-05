import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

// Sections
import Hero from "./Hero/CarouselHero";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";
import EdgeInsights from "./WhyChoose/EdgeInsights";
import Team from "./Team/Team";
import Service from "./Services/Service";
import Contact from "./Contact/Contact";

// Service Pages
import Education from "./Services/pages/Education";
import Business from "./Services/pages/Business";
import Corporate from "./Services/pages/Corporate";
import Government from "./Services/pages/Government";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <div id="hero-section"><Hero /></div>
                <div id="about-company-section"><About /></div>
                <div id="why-foursight-section"><WhyChoose /></div>
                <div id="edge-insights-section"><EdgeInsights /></div>
                <div id="team-section"><Team /></div>
                <div id="services-section"><Service /></div>
                <div id="contact-section"><Contact /></div>
              </>
            }
          />
          <Route path="/education" element={<Education />} />
          <Route path="/business" element={<Business />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/government" element={<Government />} />
          <Route
            path="*"
            element={<h2 style={{ textAlign: "center", padding: "100px 0" }}>Page Not Found</h2>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
