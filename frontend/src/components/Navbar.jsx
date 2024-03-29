import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setActive] = useState("");
  function handleLinkActive(e) {
    setActive(e.target.value);
  }
  return (
    <div className="navBarContainer">
      <div className="navbar">
        <button
          type="button"
          value="mybar"
          onClick={(e) => handleLinkActive(e)}
          className={isActive === "mybar" ? "active" : "notActive"}
        >
          <NavLink to="/mybar">Favorite</NavLink>
        </button>
        <button type="button">
          <div>
            <NavLink to="/home">
              <div className="imageContainer">
                <img src="/cocktail.png" alt="logo-cocktail-bar" />
              </div>
            </NavLink>
          </div>
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
      <div className="BlueNeon" />
    </div>
  );
}

export default Navbar;
