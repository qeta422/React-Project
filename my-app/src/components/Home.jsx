import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";

const Home = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Welcome to our website!</h1>
      <p>This is the home page.</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </motion.div>
  );
};

export default Home;
