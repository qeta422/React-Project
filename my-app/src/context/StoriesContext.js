import React, { createContext, useState, useEffect } from 'react';
import { fetchStories } from '../api/api';

export const StoriesContext = createContext();

export const StoriesProvider = ({ children }) => {
  const [stories, setStories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStories = async () => {
      try {
        const storiesData = await fetchStories();
        setStories(storiesData);
        setAuthors([...new Set(storiesData.map(story => story.name))]); // Extract unique authors
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getStories();
  }, []);

  const addStory = (story) => {
    setStories((prevStories) => [story, ...prevStories]);
    if (!authors.includes(story.name)) {
      setAuthors((prevAuthors) => [...prevAuthors, story.name]);
    }
  };

  return (
    <StoriesContext.Provider value={{ stories, authors, loading, error, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};
