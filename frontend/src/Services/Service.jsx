import React from "react";
import "./Service.css";
import {
  FaUniversity,
  FaBriefcase,
  FaBuilding,
  FaLandmark,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaUniversity />,
      title: "Education Sector",
      desc: "We design and deliver innovative education solutions, integrating technology and experiential learning to empower students and educators alike.",
      link: "/education",
    },
    {
      icon: <FaBriefcase />,
      title: "Business Sector",
      desc: "From startups to enterprises, we support organizations in achieving growth through strategy, training, and digital transformation.",
      link: "/business",
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Sector",
      desc: "We partner with corporations to develop leadership, foster team performance, and drive productivity through tailored learning solutions.",
      link: "/corporate",
    },
    {
      icon: <FaLandmark />,
      title: "Government & Public Sector",
      desc: "We collaborate with government and public entities to create impactful programs that enhance skills, efficiency, and citizen engagement.",
      link: "/government",
    },
  ];

  return (
    <section className="service-section__container">
      <div className="service-section__header">
        <h2 className="service-section__title">Exclusive Services</h2>
        <p className="service-section__description">
          Our specialized sectors are designed to deliver excellence across
          education, business, corporate, and government sectors.
        </p>
      </div>

      <div className="service-section__grid">
        {services.map((service, index) => (
          <div className="service-section__card" key={index}>
            <div className="service-section__circle"></div>
            <div className="service-section__content">
              <span className="service-section__icon">{service.icon}</span>
              <h3 className="service-section__card-title">{service.title}</h3>
              <p className="service-section__card-desc">{service.desc}</p>
              <button
                className="service-section__button"
                onClick={() => navigate(service.link)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
