import React from "react";
import "../Contact/Contact.css";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">
                We're here to help you achieve your goals. Whether you have
                questions about our services, want to schedule a consultation,
                or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="FirstName"
                  placeholder="Please enter first name..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Please enter email..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="PhoneNumber"
                  placeholder="Please enter phone number..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">What do you have in mind?</label>
                <textarea
                  id="message"
                  name="Message"
                  placeholder="Please enter your query..."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>

        {/* Map and Social Section */}
        <div className="contact-info">
          <div className="info-content">
            <h3 className="info-title">Reach us at</h3>
            <p className="info-text">
              Have a question or feedback? Fill out the form below, and we'll get back to you within 24 hours.
            </p>

            <div className="map-container">
              <iframe
                title="Foursight Learning Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7715610266423!2d74.86006437599655!3d12.87980288742563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b29ac3d4e6f%3A0xb005f6e1cff07f96!2s2nd%20Floor%2C%20City%20Corporation%20Commercial%20Complex%2C%20Mallikatte%2C%20Kadri%2C%20Mangaluru%2C%20Karnataka%20575002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="address">
              <p className="address-text">
                <strong>Address:</strong> 2nd Floor, City Corporation Commercial Complex, 
                Mallikatte, Kadri, Mangaluru - 575002
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
