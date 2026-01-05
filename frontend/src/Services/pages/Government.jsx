import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Corporate.css";
import roomImage from "../../images/GovernmentSector.avif";

const fadeInDown = {
  hidden: { opacity: 0, y: 100 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const amenitiesList = [
  "Capacity building initiatives.",
  "Digital literacy programs.",
  "Professional ethics training.",
  "Workshops and seminars for public servants.",
  "Governance and policy improvement programs.",
  "Tailored learning interventions for government needs.",
  "Sustainable impact and measurable results.",
];

const amenitiesIcons = [
  { icon: <svg width="48" height="48" fill="#02a75a"><rect x="4" y="4" width="16" height="16"/></svg>, label: "CAPACITY BUILDING" },
  { icon: <svg width="48" height="48" fill="#02a75a"><circle cx="12" cy="12" r="6"/></svg>, label: "DIGITAL LITERACY" },
  { icon: <svg width="48" height="48" fill="#02a75a"><path d="M8 8h8v8H8z"/></svg>, label: "PROFESSIONAL ETHICS" },
  { icon: <svg width="48" height="48" fill="#02a75a"><path d="M3 3h18v2H3zM3 19h18v2H3zM3 5v14l9-7z"/></svg>, label: "WORKSHOPS & SEMINARS" },
  { icon: <svg width="48" height="48" fill="#02a75a"><circle cx="12" cy="12" r="3"/></svg>, label: "POLICY IMPROVEMENT" },
  { icon: <svg width="48" height="48" fill="#02a75a"><rect x="5" y="5" width="14" height="14"/></svg>, label: "CUSTOMIZED PROGRAMS" },
  { icon: <svg width="48" height="48" fill="#02a75a"><path d="M4 4h16v16H4z"/></svg>, label: "SUSTAINABLE IMPACT" },
];

const GovernmentSector = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Then scroll to this component
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  }, []);

  return (
    <motion.div
     ref={containerRef}
      className="room-details-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 className="room-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        GOVERNMENT & PUBLIC SECTOR
      </motion.h1>

      <motion.div className="image-button-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <img src={roomImage} alt="Government Sector" className="room-image" />
      </motion.div>

      <motion.div className="room-description" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <p>
          Our Government & Public Sector programs focus on capacity building, digital literacy, and professional ethics. We provide workshops, tailored learning interventions, and measurable outcomes for sustainable public sector growth.
        </p>
        <ul className="room-amenities-list">
          {amenitiesList.map((item, idx) => (
            <motion.li key={idx} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
              <span className="checkmark">&#10004;</span> <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div className="amenities-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <h2 className="amenities-title">Why Choose Us</h2>
        <div className="amenities-icons-grid">
          {amenitiesIcons.map(({ icon, label }, idx) => (
            <motion.div key={idx} className="amenity-icon-item" custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
              <div className="icon">{icon}</div>
              <div className="label">{label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GovernmentSector;
