import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";
import ContactForm from "../forms/contactForm";

const YourStory = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Create Story</h1>
      <ContactForm />
    </motion.div>
  );
};

export default YourStory;
