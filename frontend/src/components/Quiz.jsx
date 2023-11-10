import React, { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import CocktailCard from "./CocktailCard";

function Quiz() {
  const loadedCocktails = useRouteLoaderData("App");

  const [selectedCocktails, setSelectedCocktails] = useState([]);
  const [correctCocktailIndex, setCorrectCocktailIndex] = useState(0);
  const [scoreMessage, setScoreMessage] = useState("");
  const [button, setButton] = useState(0);

  useEffect(() => {
    setScoreMessage("");
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

  const handleCocktailClick = (index) => {
    if (index === correctCocktailIndex) {
      setScoreMessage("Well done! You've guessed the right cocktail!");
    } else {
      setScoreMessage("Oops! Wrong guess. Try again!");
    }
  };

  if (selectedCocktails.length === 0) {
    return <div>Loading...</div>;
  }

  const correctCocktail = selectedCocktails[correctCocktailIndex];
  const correctCocktailIngredients = Array.from(
    { length: 15 },
    (_, i) => correctCocktail[`drinkIngredient${i + 1}`]
  ).filter(Boolean);

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
          <button type="button" onClick={() => setButton(button + 1)}>
            Refresh
          </button>
        </div>
        <ul className="ingredients-quiz">{renderedIngredients}</ul>
      </div>
      <div className="cards">{renderedCocktailCards}</div>
      <div className="title-score">
        <p>Your Result</p>
      </div>
      <div className="score-container">
        <p>{scoreMessage}</p>
      </div>
    </>
  );
}

export default Quiz;
