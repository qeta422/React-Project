import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";
import ContactForm from "../forms/contactForm";

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Contact Us</h1>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
