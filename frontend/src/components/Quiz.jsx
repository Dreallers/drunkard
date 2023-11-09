import React, { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";

function Quiz() {
  const cocktails = useRouteLoaderData("App");
  const [selectedCocktails, setSelectedCocktails] = useState([]);

  const getRandomCocktail = () =>
    cocktails[Math.floor(Math.random() * cocktails.length)];

  useEffect(() => {
    if (cocktails && cocktails.length > 0) {
      const newSelectedCocktails = Array.from({ length: 6 }, getRandomCocktail);
      setSelectedCocktails(newSelectedCocktails);
    }
  }, [cocktails]);

  if (selectedCocktails.length === 0) {
    return <p>Loading...</p>;
  }

  const [correctCocktail, ...restSelectedCocktails] = selectedCocktails;

  const ingredients = Array.from(
    { length: 15 },
    (_, i) => correctCocktail[`drinkIngredient${i + 1}`]
  ).filter(Boolean);

  return (
    <>
      <div className="quiz">
        <p className="title-quiz">Guess who I am?</p>
        <ul className="ingredients-quiz">
          {ingredients.slice(0, 5).map((ingredient) => (
            <li key={`${correctCocktail.drinkId}-${ingredient}`}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="cards">
        {restSelectedCocktails.map((cocktail) => (
          <div className="card" key={cocktail.drinkId}>
            <div className="cardName">{cocktail.drinkName}</div>
            <div className="cardIngredients" />
          </div>
        ))}
      </div>
      <div className="score">Your score:</div>
    </>
  );
}

export default Quiz;
