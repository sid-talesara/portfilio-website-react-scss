import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import AboutUS from "../assets/AboutUs.scss";
const AboutUs = () => {
  return (
    <div>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
};

export default AboutUs;
