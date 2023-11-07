import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setActive] = useState("");
  function handleLinkActive(e) {
    setActive(e.target.value);
  }
  return (
    <div className="navbar">
      <NavLink to="/mybar" className="myBar">
        My Bar
      </NavLink>
      <NavLink to="/home" className="home-button">
        <img src="/cocktail.png" alt="logo-cocktail-bar" />
      </NavLink>
      <NavLink to="/quiz" className="quizz">
        Quiz
      </NavLink>
      <button
        type="button"
        value="mybar"
        onClick={(e) => handleLinkActive(e)}
        className={isActive === "mybar" ? "active" : "notActive"}
      >
        <NavLink to="/mybar">My Bar</NavLink>
      </button>
      <button type="button">
        <NavLink to="/home">
          <div className="imageContainer">
            <img src="/cocktail.png" alt="logo-cocktail-bar" />
          </div>
        </NavLink>
      </button>
      <button
        type="button"
        value="quizz"
        onClick={(e) => handleLinkActive(e)}
        className={isActive === "quizz" ? "active" : "notActive"}
      >
        <NavLink to="/quizz">Quizz</NavLink>
      </button>
    </div>
  );
}

export default Navbar;
