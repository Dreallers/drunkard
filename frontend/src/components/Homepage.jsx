import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div className="homePageContainer">
      <div className="homePage">
        <div className="welcome">
          <p className="neonMain">
            Dr<span className="flicker-slow">u</span>nk
            <span className="flicker-fast">a</span>rd
          </p>
        </div>
        <div className="image">
          <img src="/cocktail.png" alt="logo-cocktail-bar" />
        </div>

        <div className="confirmation">Please confirm your age : </div>
        <div className="age">
          <div className="minus18">
            <a href="https://www.wildcodeschool.com/fr-fr/campus/nantes">-18</a>
          </div>
          <div className="plus18">
            <NavLink to="/home">+18</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
