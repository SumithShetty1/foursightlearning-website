import React from "react";
import "./Footer.css";
import bgImage from "../images/BgImage.avif";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAnchorClick = (e, id) => {
    // Prevent default anchor jump and do smooth scroll instead
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="footer-content">
        {/* Address */}
        <h3 className="footer-title">
          2nd Floor, City Corporation Commercial Complex, Mallikatte, Kadri, Mangaluru - 575002
        </h3>

        {/* Contact Info */}
        <div className="contact-row">
          <div className="contact-item">
            <FaWhatsapp aria-hidden="true" />
            <a
              className="contact-link"
              href="https://wa.me/919148798244?text=Hi%2C%20Greetings%20from%20FoursightLearning"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              +91 9148798244
            </a>
          </div>

          <div className="contact-item">
            <FaEnvelope aria-hidden="true" />
            <a className="contact-link" href="mailto:info@foursightlearning.com" aria-label="Email">
              info@foursightlearning.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-row">
          <p className="social-heading">Get In Touch</p>
          <div className="social-icons">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/foursightlearning" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/company/foursightlearning" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Links (smooth scroll anchors) */}
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#hero-section" onClick={(e) => handleAnchorClick(e, "hero-section")}>Home</a>
          <a href="#about-company-section" onClick={(e) => handleAnchorClick(e, "about-company-section")}>About</a>
          <a href="#services-section" onClick={(e) => handleAnchorClick(e, "services-section")}>Services</a>
          <a href="#contact-section" onClick={(e) => handleAnchorClick(e, "contact-section")}>Contact</a>
        </nav>

        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025 <span>foursightlearning.com</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
