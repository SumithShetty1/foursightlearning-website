import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Corporate.css";
import roomImage from "../../images/CoperateSector.avif";

// ✅ Section animation (Top → Down)
const fadeInDown = {
  hidden: { opacity: 0, y: 100 }, // start lower, move upward to visible
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const amenitiesList = [
  "Leadership development and executive coaching.",
  "Team-building and communication enhancement programs.",
  "Employee engagement and motivation workshops.",
  "Performance management and productivity training.",
  "Customized corporate learning interventions.",
  "Culture transformation and leadership alignment.",
  "Continuous growth through mentorship and feedback.",
];

// ✅ Unique SVG icons
const amenitiesIcons = [
  {
    icon: (
      <svg width="48" height="48" fill="#02a75a" viewBox="0 0 24 24">
        <path d="M12 2L15 8H9L12 2ZM12 22V10" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    ),
    label: "LEADERSHIP TRAINING",
  },
  {
    icon: (
      <svg width="48" height="48" fill="#02a75a" viewBox="0 0 24 24">
        <path d="M21 6H3v12h18V6ZM5 8h14v8H5V8Zm3 9v2H4v-2h4Zm8 0h4v2h-4v-2Z" />
      </svg>
    ),
    label: "COMMUNICATION SKILLS",
  },
  {
    icon: (
      <svg width="48" height="48" fill="#02a75a" viewBox="0 0 24 24">
        <path d="M4 4h16v2H4zm0 7h10v2H4zm0 7h16v2H4z" />
      </svg>
    ),
    label: "PRODUCTIVITY BOOST",
  },
  {
    icon: (
      <svg width="48" height="48" fill="#02a75a" viewBox="0 0 24 24">
        <path d="M12 2l3 5h5l-4 4 2 7-6-4-6 4 2-7-4-4h5z" />
      </svg>
    ),
    label: "TEAM COLLABORATION",
  },
  {
    icon: (
      <svg width="48" height="48" fill="#02a75a" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22c0-4 16-4 16 0v1H4v-1z" />
      </svg>
    ),
    label: "EXECUTIVE COACHING",
  },
  {
    icon: (
      <svg width="48" height="48" fill="#02a75a" viewBox="0 0 24 24">
        <path d="M2 4h20v2H2zM2 10h14v2H2zM2 16h20v2H2zM2 22h8v2H2z" />
      </svg>
    ),
    label: "CULTURE DEVELOPMENT",
  },
  {
    icon: (
      <svg width="48" height="48" fill="#02a75a" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z" />
      </svg>
    ),
    label: "GROWTH MINDSET PROGRAMS",
  },
];

const CorporateSector = () => {
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
      initial={{ opacity: 0, y: -100 }} // start above the screen
      animate={{ opacity: 1, y: 0 }}   // move down into view
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="room-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
      >
        CORPORATE SECTOR
      </motion.h1>

      <motion.div
        className="image-button-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
      >
        <img src={roomImage} alt="Corporate Sector" className="room-image" />
      </motion.div>

      <motion.div
        className="room-description"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
      >
        <p>
          In the Corporate Sector, we focus on transforming leadership
          capabilities, enhancing communication, and creating thriving workplace
          cultures. Our tailored learning solutions are designed to boost team
          performance, engagement, and organizational productivity.
        </p>
        <ul className="room-amenities-list">
          {amenitiesList.map((item, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
            >
              <span className="checkmark">&#10004;</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="amenities-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
      >
        <h2 className="amenities-title">Why Choose Us</h2>
        <div className="amenities-icons-grid">
          {amenitiesIcons.map(({ icon, label }, idx) => (
            <motion.div
              key={idx}
              className="amenity-icon-item"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
            >
              <div className="icon">{icon}</div>
              <div className="label">{label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CorporateSector;
