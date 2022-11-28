import React from "react";
import home1 from "../img/home1.png";
// framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },

    show: { opacity: 1, transition: { duration: 2, when: "afterChildren" } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        staggerChildren: 0.75,
      },
    },
  };

  return (
    <div className="about-section">
      <div className="description">
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              {" "}
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas to discuss, we
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <img src={home1} alt="Guy with a camera" />
    </div>
  );
};

export default AboutSection;
