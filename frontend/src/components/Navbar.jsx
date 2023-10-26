import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
