import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </motion.div>
  );
};

export default About;
