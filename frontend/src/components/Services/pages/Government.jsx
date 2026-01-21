import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Corporate.css";
import roomImage from "../../../images/GovernmentSector.avif";
import {
  LuBuilding,
  LuMonitorSmartphone,
  LuScale,
  LuPresentation,
  LuFileText,
  LuSlidersHorizontal,
  LuLeaf,
} from "react-icons/lu";
import { Helmet } from "react-helmet-async";


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
  {
    icon: <LuBuilding size={42} />,
    label: "CAPACITY BUILDING",
  },
  {
    icon: <LuMonitorSmartphone size={42} />,
    label: "DIGITAL LITERACY",
  },
  {
    icon: <LuScale size={42} />,
    label: "PROFESSIONAL ETHICS",
  },
  {
    icon: <LuPresentation size={42} />,
    label: "WORKSHOPS & SEMINARS",
  },
  {
    icon: <LuFileText size={42} />,
    label: "POLICY IMPROVEMENT",
  },
  {
    icon: <LuSlidersHorizontal size={42} />,
    label: "CUSTOMIZED PROGRAMS",
  },
  {
    icon: <LuLeaf size={42} />,
    label: "SUSTAINABLE IMPACT",
  },
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
      <Helmet>
        <title>Government & Public Sector Services | FourSight Learning Private Limited</title>
        <meta
          name="description"
          content="FourSight Learning Private Limited offers capacity building, digital literacy, professional ethics training, policy improvement, and sustainable development initiatives."
        />
        <link
          rel="canonical"
          href="https://www.foursightlearning.com/government"
        />
      </Helmet>

      <motion.h1 className="room-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        Government & Public Sector
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

export default GovernmentSector;
