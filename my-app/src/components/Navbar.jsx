import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/YourStory">Your Story</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Toggle Theme: {theme}</button>
    </nav>
  );
};

export default Navbar;
