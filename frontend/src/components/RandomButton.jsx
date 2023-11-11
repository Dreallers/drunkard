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
    <div className="random">
      <button
        className="random-button"
        type="button"
        onClick={handleGeneratedCocktail}
      >
        <img src="/dice neon crop png.png" alt=" cocktail random button" />
      </button>
      <div className="cocktail-generated">
        {randomCocktail && (
          <div>
            <CardTwo key={randomCocktail.drinkId} cocktail={randomCocktail} />
          </div>
        )}
      </div>
    </div>
  );
}

export default RandomButton;
