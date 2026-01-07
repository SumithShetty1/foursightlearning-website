import React from "react";
import "../Contact/Contact.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "9148798244";
  const callNumber = "9844762311";
  const email = "info@foursightlearning.com";
  
  const whatsappMessage = "Hello FourSight Learning, I'd like to know more about your training programs.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:+91${callNumber}`;

  return (
    <div className="contact-section" id="contact-section">
      <div className="contact-container">
        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="info-content">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">
              We're here to help you achieve your goals. Whether you have
              questions about our services, want to schedule a consultation,
              or just want to say hello, feel free to reach out through any of
              the contact methods below.
            </p>

            {/* Contact Methods */}
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon phone-icon">
                  <FaPhoneAlt />
                </div>
                <div className="method-content">
                  <h3 className="method-title">Phone Call</h3>
                  <a 
                    href={callUrl} 
                    className="method-link"
                  >
                    +91 98447 62311
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <div className="method-content">
                  <h3 className="method-title">WhatsApp</h3>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="method-link"
                  >
                    +91 91487 98244
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon email-icon">
                  <FaEnvelope />
                </div>
                <div className="method-content">
                  <h3 className="method-title">Email</h3>
                  <a 
                    href={`mailto:${email}`} 
                    className="method-link"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-content">
            <h3 className="info-title">Our Location</h3>
            <p className="info-text">
              Find us easily in Mangaluru. Click on the map for directions or visit us at our office.
            </p>

            <div className="map-container">
              <iframe
                title="FourSight Learning Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.06172371456339!2d74.8584265!3d12.879822700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a3a4c382bc9%3A0xdd2db63f146b209d!2sCEOL%20-%20Incubation%20Centre%20Mangalore!5e1!3m2!1sen!2sin!4v1767775738907!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="map-actions">
              <a 
                href="https://www.google.com/maps/dir//CEOL+-+Incubation+Centre+Mangalore,+KUDCEMP+Building,+2nd+Floor,+MCC+Commercial+Complex,+Mallikatte,+Kadri,+Mangaluru,+Karnataka+575002/@12.879772,74.858435,106m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3ba35a3a4c382bc9:0xdd2db63f146b209d!2sCEOL+-+Incubation+Centre+Mangalore!8m2!3d12.8797722!4d74.8584345!16s%2Fg%2F11hbnt1dbd!4m7!1m0!1m5!1m1!1s0x3ba35a3a4c382bc9:0xdd2db63f146b209d!2m2!1d74.8584345!2d12.8797722?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="direction-btn"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
