import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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
