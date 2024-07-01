import axios from 'axios';

const API_URL = 'https://shortstories-api.onrender.com/stories';

export const fetchStories = async () => {
  const response = await axios.get(API_URL);
  const stories = response.data.slice(0, 20).map((story) => ({
    id: story._id,
    title: story.title,
    body: story.story,
    name: story.author,
    uploadDate: new Date().toISOString().split('T')[0] 
  }));
  return stories;
};
