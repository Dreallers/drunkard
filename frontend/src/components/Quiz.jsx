import React, { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import Confetti from "react-confetti";
import { useOutletContext } from "./OutletContext";
import CocktailCard from "./CocktailCard";

function Quiz() {
  const { favoriteTable, setfavoriteTable } = useOutletContext();
  const loadedCocktails = useRouteLoaderData("App");

  const [selectedCocktails, setSelectedCocktails] = useState([]);
  const [correctCocktailIndex, setCorrectCocktailIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [scoreMessage, setScoreMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [nextButtonClickCount, setNextButtonClickCount] = useState(0);
  const [restartClicked, setRestartClicked] = useState(false);

  useEffect(() => {
    setScoreMessage("");
    setIsCorrect(false);

    if (loadedCocktails?.length > 0 && !restartClicked) {
      const allCocktails = loadedCocktails.map((cocktail) => ({ ...cocktail }));
      const shuffledCocktails = allCocktails
        .map((cocktail) => ({ ...cocktail }))
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

      const randomIndex = Math.floor(Math.random() * shuffledCocktails.length);

      setCorrectCocktailIndex(randomIndex);
      setSelectedCocktails(shuffledCocktails);
    }

    setRestartClicked(false);
  }, [loadedCocktails, nextButtonClickCount, restartClicked]);

  if (selectedCocktails.length === 0) {
    return <div>Loading...</div>;
  }

  const correctCocktail = selectedCocktails[correctCocktailIndex];
  const correctCocktailIngredients = Array.from(
    { length: 15 },
    (_, i) => correctCocktail[`drinkIngredient${i + 1}`]
  ).filter(Boolean);

  const handleCocktailClick = (clickedIndex) => {
    setAttempts(attempts + 1);

    if (clickedIndex === correctCocktailIndex) {
      setScore(score + 1);
      setScoreMessage("Well done! You've guessed the right cocktail!");
      setIsCorrect(true);

      setSelectedCocktails((prevCocktails) =>
        prevCocktails.map((cocktail, i) => ({
          ...cocktail,
          isSelected: i === correctCocktailIndex,
        }))
      );
    } else {
      setScoreMessage("Oops! Wrong guess. Try again!");

      if (attempts >= 2) {
        setScoreMessage(
          `Oops! Wrong guess. The cocktail is ${correctCocktail.drinkName}.`
        );
        setIsCorrect(true);
        setSelectedCocktails((prevCocktails) =>
          prevCocktails.map((cocktail, i) => ({
            ...cocktail,
            isSelected: i === correctCocktailIndex || i === clickedIndex,
            isFlipped: i === clickedIndex,
          }))
        );
      }

      if (attempts === 3) {
        setQuizEnded(true);
      }
    }
  };

  const handleNextButtonClick = () => {
    if (nextButtonClickCount + 1 < 5) {
      setAttempts(0);
      setNextButtonClickCount(nextButtonClickCount + 1);
      setQuizEnded(false);
    }
  };

  const handleRestartClick = () => {
    setScore(0);
    setNextButtonClickCount(0);
    setQuizEnded(false);
    setRestartClicked(true);
  };

  const renderedIngredients = correctCocktailIngredients
    .slice(0, 5)
    .map((ingredient) => <li key={ingredient}>{ingredient}</li>);

  const renderedCocktailCards = selectedCocktails.map((cocktail, index) => (
    <div
      className={`cocktailCard-wrapper ${cocktail.isSelected ? "correct" : ""}`}
      key={cocktail.drinkId}
    >
      <CocktailCard
        cocktail={cocktail}
        startFlipped={cocktail.isFlipped || false}
        onClick={() => handleCocktailClick(index)}
        favoriteTable={favoriteTable}
        setfavoriteTable={setfavoriteTable}
      />
    </div>
  ));

  return (
    <>
      <div className="quiz">
        <div className="top">
          {quizEnded && <Confetti />}
          <p className="title-quiz">{`Guess who I am? (${Math.min(
            nextButtonClickCount + 1,
            5
          )}/5)`}</p>

          <ul className="ingredients-quiz">{renderedIngredients}</ul>
          {isCorrect && !quizEnded && (
            <button type="button" onClick={handleNextButtonClick}>
              Next
            </button>
          )}
          {quizEnded && (
            <button type="button" onClick={handleRestartClick}>
              Restart
            </button>
          )}
        </div>
      </div>
      <div className="cards">{renderedCocktailCards}</div>
      <div className="title-score">
        <p>Score</p>
      </div>
      <div className="score-container">
        <p>
          Your score is {score} out of {5}
        </p>
        <p className="score-message">{scoreMessage}</p>
      </div>
    </>
  );
}

export default Quiz;
