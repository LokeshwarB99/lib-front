import React, { useState, useEffect } from "react";
import moonImage from "../assets/moon.png";
import sunImage from "../assets/sun.png";
import "../assets/styles/s.css";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <nav className="navbar">
      <span className="brand">Library Store</span>
      <span onClick={toggleTheme} role="button" class="outline secondary">
        Set Theme <img src={darkTheme ? sunImage : moonImage} alt="" />
      </span>
    </nav>
  );
};

export default Navbar;
