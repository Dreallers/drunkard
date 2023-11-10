import { useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import CardTwo from "./CardTwo";

function RandomButton() {
  const cocktails = useRouteLoaderData("App");
  const [randomCocktail, setRandomCocktail] = useState(false);

  const handleGeneratedCocktail = () => {
    const randomIndex = Math.floor(Math.random() * cocktails.length);
    setRandomCocktail(cocktails[randomIndex]);
  };

  return (
    <>
      <div className="random">
        <button type="button" onClick={handleGeneratedCocktail}>
          <img src="/dice neon.png" alt=" cocktail random button" />
        </button>
      </div>
      {randomCocktail && (
        <div>
          <CardTwo key={randomCocktail.drinkId} cocktail={randomCocktail} />
        </div>
      )}
    </>
  );
}

export default RandomButton;
