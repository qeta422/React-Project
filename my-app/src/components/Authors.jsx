import React, { useContext } from "react";
import { StoriesContext } from "../context/StoriesContext";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";
import "../styles/Authors.css";

const Authors = () => {
  const { authors, loading, error } = useContext(StoriesContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading authors: {error.message}</p>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Authors</h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Authors;
