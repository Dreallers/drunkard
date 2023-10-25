import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="myBar">MyBar</NavLink>
      <NavLink className="home-button">
        <img src="/cocktail.png" alt="logo-cocktail-bar" />
      </NavLink>
      <NavLink className="quizz">Quizz</NavLink>
    </div>
  );
}

export default Navbar;
