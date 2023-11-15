import React, { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import CocktailCard from "./CocktailCard";

function Quiz() {
  const loadedCocktails = useRouteLoaderData("App");

  const [selectedCocktails, setSelectedCocktails] = useState([]);
  const [correctCocktailIndex, setCorrectCocktailIndex] = useState(0);
  const [scoreMessage, setScoreMessage] = useState("");
  const [button, setButton] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setScoreMessage("");
    setIsCorrect(false);
    if (loadedCocktails && loadedCocktails.length > 0) {
      const allCocktails = loadedCocktails.map((cocktail) => ({ ...cocktail }));
      const shuffledCocktails = allCocktails
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
      const randomIndex = Math.floor(Math.random() * shuffledCocktails.length);

      setCorrectCocktailIndex(randomIndex);
      setSelectedCocktails(shuffledCocktails);
    }
  }, [loadedCocktails, button]);

  if (selectedCocktails.length === 0) {
    return <div>Loading...</div>;
  }

  const correctCocktail = selectedCocktails[correctCocktailIndex];
  const correctCocktailIngredients = Array.from(
    { length: 15 },
    (_, i) => correctCocktail[`drinkIngredient${i + 1}`]
  ).filter(Boolean);

  const handleCocktailClick = (index) => {
    setAttempts(attempts + 1);
    if (index === correctCocktailIndex) {
      setScore(score + 1);
      setScoreMessage("Well done! You've guessed the right cocktail!");
      setIsCorrect(true);
    } else {
      setScoreMessage("Oops! Wrong guess. Try again!");
      if (attempts === 2) {
        setScoreMessage(
          `Oops! Wrong guess. The correct cocktail is ${correctCocktail.drinkName}.`
        );
        setIsCorrect(true);
      }
    }
  };

  console.info(correctCocktail);

  const renderedIngredients = correctCocktailIngredients
    .slice(0, 5)
    .map((ingredient) => <li key={ingredient}>{ingredient}</li>);

  const renderedCocktailCards = selectedCocktails.map((cocktail, index) => (
    <div className="cocktailCard-wrapper">
      <CocktailCard
        key={cocktail.drinkId}
        cocktail={cocktail}
        startFlipped={false}
        onClick={() => handleCocktailClick(index)}
      />
    </div>
  ));

  return (
    <>
      <div className="quiz">
        <div className="top">
          <p className="title-quiz">Guess who I am?</p>
          {isCorrect && (
            <button type="button" onClick={() => setButton(button + 1)}>
              Next
            </button>
          )}
        </div>
        <ul className="ingredients-quiz">{renderedIngredients}</ul>
      </div>
      <div className="cards">{renderedCocktailCards}</div>
      <div className="title-score">
        <p>Your Score</p>
      </div>
      <div className="score-container">
        <p>Your score is {score} out of 5</p>
        <p className="score-message">{scoreMessage}</p>
      </div>
    </>
  );
}

export default Quiz;
