import React from "react";
import "../Contact/Contact.css";

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
      </div>
    </div>
  );
};

export default Contact;
