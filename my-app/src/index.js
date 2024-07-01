import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { StoriesProvider } from './context/StoriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoriesProvider>
    <App />
  </StoriesProvider>
);
