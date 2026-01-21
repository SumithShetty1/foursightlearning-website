import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Corporate.css";
import roomImage from "../../../images/2.jpg";
import { Helmet } from "react-helmet-async";

import {
  LuLightbulb,
  LuUsers,
  LuWallet,
  LuTarget,
  LuBriefcase,
  LuUserCheck,
  LuTrendingUp,
} from "react-icons/lu";


const fadeInDown = {
  hidden: { opacity: 0, y: 100 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const amenitiesList = [
  "Entrepreneurial development programs.",
  "Customer engagement and marketing workshops.",
  "Financial literacy training.",
  "Business strategy and planning sessions.",
  "Hands-on practical projects.",
  "Mentorship from industry experts.",
  "Continuous business growth guidance.",
];

const amenitiesIcons = [
  {
    icon: <LuLightbulb size={42} />,
    label: "ENTREPRENEURIAL DEVELOPMENT",
  },
  {
    icon: <LuUsers size={42} />,
    label: "CUSTOMER ENGAGEMENT",
  },
  {
    icon: <LuWallet size={42} />,
    label: "FINANCIAL LITERACY",
  },
  {
    icon: <LuTarget size={42} />,
    label: "STRATEGY & PLANNING",
  },
  {
    icon: <LuBriefcase size={42} />,
    label: "PRACTICAL PROJECTS",
  },
  {
    icon: <LuUserCheck size={42} />,
    label: "INDUSTRY MENTORSHIP",
  },
  {
    icon: <LuTrendingUp size={42} />,
    label: "CONTINUOUS GROWTH",
  },
];


const BusinessSector = () => {
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
      <Helmet>
        <title>Business Sector Services | FourSight Learning Private Limited</title>
        <meta
          name="description"
          content="FourSight Learning Private Limited offers entrepreneurship development, customer engagement, financial literacy, strategic planning, and mentorship for sustainable growth."
        />
        <link
          rel="canonical"
          href="https://www.foursightlearning.com/business"
        />
      </Helmet>

      <motion.h1 className="room-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        Business Sector
      </motion.h1>

      <motion.div className="image-button-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <img src={roomImage} alt="Business Sector" className="room-image" />
      </motion.div>

      <motion.div className="room-description" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <p>
          Our Business Sector programs empower entrepreneurs, enhance customer engagement, and develop financial literacy. We deliver hands-on projects, mentorship, and strategies to drive measurable business growth.
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
        <h2 className="amenities-title">Our Value Proposition</h2>
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

export default BusinessSector;
