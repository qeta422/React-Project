import React, { useEffect, useState } from "react";
import { fetchStories } from "../api/api";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/animations";
import "../styles/Home.css";

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedStories = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return stories.slice(startIndex, endIndex);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading stories: {error.message}</p>;
  }

  const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Welcome to our website!</h1>
      <div className="story-grid">
        {getPaginatedStories().map((story) => (
          <div key={story.id} className="story-card">
            <h3>{story.title}</h3>
            <p>{story.body}</p>
            <p>
              <strong>By:</strong> {story.name}
            </p>
            <p>
              <strong>Upload Date:</strong> {story.uploadDate}
            </p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
