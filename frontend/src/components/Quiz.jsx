import React from "react";
import Navbar from "./Navbar";

function Quiz() {
  return (
    <>
      <Navbar />
      <div className="quiz">
        <p className="title-quiz">Guess who I am</p>
        <ul className="ingredients-quiz">
          <li>Whisky 5cl</li>
          <li>Angostura bitter 4 dashes</li>
          <li>Brown sugar</li>
          <li>Orange peel 1</li>
        </ul>
      </div>
    </>
  );
}

export default Quiz;
