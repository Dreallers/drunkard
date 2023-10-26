import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/mybar">My Bar</NavLink>
      <NavLink to="/home">
        <img src="/cocktail.png" alt="logo-cocktail-bar" />
      </NavLink>
      <NavLink to="/quizz">Quizz</NavLink>
    </div>
  );
}

export default Navbar;
