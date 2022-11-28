import React from "react";
import { Link } from "react-router-dom";
import OurWorkStyle from "../assets/OurWork.scss";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const OurWork = () => {
  return (
    <motion.div
      className="work"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="Movie">
        <h2>The Athlete </h2>
        <div className="line"></div>
        <Link to="the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </div>

      <div className="Movie">
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="the-racer">
          <img src={theracer} alt="athlete" />
        </Link>
      </div>

      <div className="Movie">
        <h2>GoodTimes</h2>
        <div className="line"></div>
        <Link to="good-times">
          <img src={goodtimes} alt="athlete" />
        </Link>
      </div>
    </motion.div>
  );
};

export default OurWork;
