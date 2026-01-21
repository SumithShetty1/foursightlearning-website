import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Education.css";
import roomImage from "../../../images/EducationSector.avif";
import {
  LuGraduationCap,
  LuBriefcase,
  LuBookOpen,
  LuPresentation,
  LuUserCheck,
  LuSettings,
  LuRefreshCcw,
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
  "Faculty development programs.",
  "Student employability initiatives.",
  "Career skill workshops.",
  "Mentorship and guidance for academic success.",
  "Customized education interventions.",
  "Practical learning methods.",
  "Continuous improvement and feedback loops.",
];

const amenitiesIcons = [
  {
    icon: <LuGraduationCap size={42} />,
    label: "FACULTY TRAINING",
  },
  {
    icon: <LuBriefcase size={42} />,
    label: "STUDENT EMPLOYABILITY",
  },
  {
    icon: <LuBookOpen size={42} />,
    label: "CAREER SKILLS",
  },
  {
    icon: <LuPresentation size={42} />,
    label: "WORKSHOPS & SEMINARS",
  },
  {
    icon: <LuUserCheck size={42} />,
    label: "MENTORSHIP",
  },
  {
    icon: <LuSettings size={42} />,
    label: "CUSTOMIZED PROGRAMS",
  },
  {
    icon: <LuRefreshCcw size={42} />,
    label: "CONTINUOUS IMPROVEMENT",
  },
];


const EducationSector = () => {
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
        <title>Education Sector Services | FourSight Learning Private Limited</title>
        <meta
          name="description"
          content="FourSight Learning Private Limited offers faculty development, student employability programs, career skill workshops, mentorship, and customized education sector solutions."
        />
        <link
          rel="canonical"
          href="https://www.foursightlearning.com/education"
        />
      </Helmet>
      <motion.h1 className="room-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        Education Sector
      </motion.h1>

      <motion.div className="image-button-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <img src={roomImage} alt="Education Sector" className="room-image" />
      </motion.div>

      <motion.div className="room-description" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInDown}>
        <p>
          We focus on faculty development, student employability, and practical career skill programs. Our customized learning journeys create measurable outcomes and sustainable growth for educational institutions.
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

export default EducationSector;
