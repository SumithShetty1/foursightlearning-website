import React from "react";
import "./Team.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";

import Arun from "../images/Arun Peter.jpg";
import Deepak from "../images/Deepak Raj.jpg";
import Deeraj from "../images/Deeraj B.jpg";
import Madhu from "../images/Madhusudan.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Deeraj B Udyawar ",
      title: "Managing Director",
      img: Deeraj,
      desc: "An accomplished Financial and Business Leadership Coach, Entrepreneur, and Motivational Speaker with 30 years of corporate expertise and inspiring leadership impact.",
    },

    {
      name: "Deepak Raj",
      title: "Director – Research and Development",
      img: Deepak,
      desc: "Worked as a corporate Manager, award-winning leader, educator, and soft-skill trainer, with an inspiring journey in JCI, academia, corporate excellence, and community development.",
    },
    {
      name: "Arun Peter Pinto ",
      title: "Director – Marketing",
      img: Arun,
      desc: "Co-founder of Automation Technologies, past JCI and Lions leader, passionate traveler, agriculturist, and committed social contributor, aspiring to inspire entrepreneurs through leadership and motivation",
    },

    {
      name: "Madhusudan Shinde",
      title: "Director – Administration",
      img: Madhu,
      desc: "A dynamic professional with expertise in administration, training, and welfare, co-founder and director in multiple ventures, and a passionate leader dedicated to education, development, and organizational growth.",
    },
  ];

  return (
    <section className="team-section__container">
      <div className="team-section__header">
        <h2 className="team-section__main-heading">Meet The Team</h2>
        <div className="team-section__underline"></div>
      </div>

      <div className="team-section__members">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-section__member-card ${
              index % 2 === 0
                ? "team-section__card--up"
                : "team-section__card--down"
            }`}
          >
            <div className="team-section__image">
              <img src={member.img} alt={member.name} />
              <div className="team-section__overlay">
                <h4>{member.name}</h4>
                <h5>{member.title}</h5>
                <p>{member.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <footer className="team-section__footer">
        <p>© 2025 Foursight Learning — All Rights Reserved</p>
      </footer> */}
    </section>
  );
};

export default Team;
