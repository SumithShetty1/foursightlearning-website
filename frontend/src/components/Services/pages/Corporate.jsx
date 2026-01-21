import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Corporate.css";
import roomImage from "../../../images/CoperateSector.avif";
import {
  LuCrown,
  LuMessageSquare,
  LuGauge,
  LuUsers,
  LuUserCog,
  LuBuilding2,
  LuTrendingUp,
} from "react-icons/lu";
import { Helmet } from "react-helmet-async";


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

const amenitiesIcons = [
  {
    icon: <LuCrown size={42} />,
    label: "LEADERSHIP TRAINING",
  },
  {
    icon: <LuMessageSquare size={42} />,
    label: "COMMUNICATION SKILLS",
  },
  {
    icon: <LuGauge size={42} />,
    label: "PRODUCTIVITY BOOST",
  },
  {
    icon: <LuUsers size={42} />,
    label: "TEAM COLLABORATION",
  },
  {
    icon: <LuUserCog size={42} />,
    label: "EXECUTIVE COACHING",
  },
  {
    icon: <LuBuilding2 size={42} />,
    label: "CULTURE DEVELOPMENT",
  },
  {
    icon: <LuTrendingUp size={42} />,
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
      <Helmet>
        <title>Corporate Sector Services | FourSight Learning Private Limited</title>
        <meta
          name="description"
          content="FourSight Learning Private Limited offers leadership development, executive coaching, team collaboration, productivity enhancement, and culture transformation programs."
        />
        <link
          rel="canonical"
          href="https://www.foursightlearning.com/corporate"
        />
      </Helmet>
      <motion.h1
        className="room-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
      >
        Corporate Sector
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
        <h2 className="amenities-title">Our Value Proposition</h2>
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
