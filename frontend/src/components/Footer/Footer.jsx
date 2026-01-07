import React from "react";
import "./Footer.css";
import bgImage from "../../images/BgImage.avif";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "9148798244";
  const callNumber = "9844762311"; // New call number
  const whatsappMessage = "Hello FourSight Learning, I'd like to know more about your training programs.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:+91${callNumber}`;

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="footer-content">
        {/* Company Name */}
        <h2 className="company-name">
          FourSight Learning Private Limited
        </h2>

        {/* Address */}
        <h3 className="footer-title">
          KUDCEMP Building, 2nd Floor, MCC Commercial Complex, Mallikatte, Kadri, Mangaluru, Karnataka - 575002
        </h3>

        {/* Contact Info */}
        <div className="contact-row">
          <div className="contact-item">
            <FaPhoneAlt aria-hidden="true" />
            <a
              className="contact-link"
              href={callUrl}
              aria-label="Call"
            >
              +91 98447 62311
            </a>
          </div>

          <div className="contact-item">
            <FaWhatsapp aria-hidden="true" />
            <a
              className="contact-link"
              href={whatsappUrl} 
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

        <hr className="footer-divider" />

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
