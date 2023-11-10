import React, { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import CocktailCard from "./CocktailCard";

function Quiz() {
  const loadedCocktails = useRouteLoaderData("App");

  const [selectedCocktails, setSelectedCocktails] = useState([]);
  const [correctCocktailIndex, setCorrectCocktailIndex] = useState(0);

  useEffect(() => {
    if (loadedCocktails && loadedCocktails.length > 0) {
      const allCocktails = loadedCocktails.map((cocktail) => ({ ...cocktail }));
      const shuffledCocktails = allCocktails
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
      const randomIndex = Math.floor(Math.random() * shuffledCocktails.length);

      setCorrectCocktailIndex(randomIndex);
      setSelectedCocktails(shuffledCocktails);
    }
  }, [loadedCocktails]);

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

  const renderedCocktailCards = selectedCocktails.map((cocktail) => (
    <CocktailCard
      key={cocktail.drinkId}
      cocktail={cocktail}
      startFlipped={false}
    />
  ));

  return (
    <>
      <div className="quiz">
        <p className="title-quiz">Guess who I am?</p>
        <ul className="ingredients-quiz">{renderedIngredients}</ul>
      </div>
      <div className="cards">{renderedCocktailCards}</div>
      <div className="score">Your score:</div>
    </>
  );
}

export default Quiz;
