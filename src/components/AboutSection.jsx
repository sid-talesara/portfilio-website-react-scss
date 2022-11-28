import React from "react";
import home1 from "../img/home1.png";
// Animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Waves from "./Waves";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="description">
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas to discuss, we
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      <Waves />
    </div>
  );
};

export default AboutSection;
