import React, { useEffect, useState } from "react";
import { fetchStories } from "../api/api";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";
import "../styles/Home.css";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStories = async () => {
      try {
        const storiesData = await fetchStories();
        setStories(storiesData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getStories();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading stories: {error.message}</p>;
  }

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
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.body}</p>
            <p>
              <strong>By:</strong> {story.name}
            </p>
            <p>
              <strong>Upload Date:</strong> {story.uploadDate}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Home;
