import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Score from "./Score";

function Quiz() {
  return (
    <>
      <Navbar />
      <div className="quiz">
        <p className="title-quiz">Guess who I am ?</p>
        <ul className="ingredients-quiz">
          <li>Whisky 5cl</li>
          <li>Angostura bitter 4 dashes</li>
          <li>Brown sugar</li>
          <li>Orange peel x1</li>
        </ul>
      </div>
      <Score />
      <Footer />
    </>
  );
}

export default Quiz;
