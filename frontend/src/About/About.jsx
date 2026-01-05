import React from "react";
import "./About.css";
import useScrollAnimation from "../useScrollAnimation";

const About = () => {
  useScrollAnimation();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">

          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 animate-fade-right">
            <div className="inner-column">
              <div className="sec-title animate-fade-up">
                <span className="title">About Company</span>
                <h2>
                  Empowering Skills,
                  <br /> Enabling Careers.
                </h2>
              </div>

              <div
                className="text animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                FourSight Learning Private Limited is a professional learning and
                consulting organization dedicated to delivering high-quality
                training, skill development, and educational consultancy services.
                We work with educational institutions, corporates, and organizations
                to transform knowledge into practical, career-oriented outcomes.
              </div>

              <div
                className="text animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Our expertise spans corporate training, vocational education,
                career development programs, online and offline learning,
                internships, apprenticeships, and consultancy services. We focus
                on building industry-relevant skills that enhance employability,
                productivity, and professional growth in India and globally.
              </div>

              <ul
                className="list-style-one animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <li>Professional training and corporate skill development</li>
                <li>Educational, vocational, and career-focused programs</li>
                <li>Consultancy, certification courses, and institutional support</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 animate-fade-left">
            <div className="inner-column">
              <figure
                className="image-1 animate-zoom-in"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                  alt="Professional training and learning"
                />
              </figure>
              <figure
                className="image-2 animate-zoom-in"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src="https://i.ibb.co/JvN0NVB/image-2-about.jpg"
                  alt="Career development and consultancy"
                />
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
