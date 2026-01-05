import React from "react";
import "../WhyChoose/WhyChoose.css";
import teamImage from "../images/audience.jpg";
import useScrollAnimation from "../useScrollAnimation";

const WhyChoose = () => {
  useScrollAnimation(); // activate scroll animations

  const points = [
    {
      number: "01",
      title: "Tailor-Made Programs",
      text: "Customized solutions designed to meet your unique organizational needs and learning goals.",
    },
    {
      number: "02",
      title: "Practical Training Methods",
      text: "Hands-on, real-world approaches that ensure immediate application and lasting results.",
    },
    {
      number: "03",
      title: "Experienced Trainers",
      text: "Led by seasoned professionals with years of proven expertise across multiple sectors.",
    },
    {
      number: "04",
      title: "Sustainable Growth Focus",
      text: "We emphasize measurable outcomes and long-term capability building for your teams.",
    },
  ];

  return (
    <section className="whychoose-section">
      <div className="whychoose-container">
        {/* Left Side */}
        <div className="whychoose-left animate-fade-right">
          <h6 className="whychoose-subtitle animate-fade-up">You Will Love It</h6>
          <h2 className="whychoose-title animate-fade-up">Why 4Sight Learning?</h2>

          <div className="whychoose-points">
            {points.map((point, index) => (
              <div
                key={index}
                className="whychoose-item animate-fade-up"
                style={{ transitionDelay: `${0.2 * index}s` }}
              >
                <div className="whychoose-number">{point.number}</div>
                <div className="whychoose-text">
                  <h4>{point.title}</h4>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="whychoose-right animate-fade-left">
          <div className="whychoose-image-container animate-zoom-in">
            <img src={teamImage} alt="Why 4Sight Learning" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
