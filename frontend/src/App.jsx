import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [FinalCocktailTable, setFinalCocktailTable] = useState([]);

  /* todo : voir useEffect pour virer le bouton */
  function getCocktail() {
    /* Boucle pour lire l'API de a à z: */
    for (let i = 97; i <= 122; i += 1) {
      const activeLetter = String.fromCharCode(i); /* on récupère la lettre */
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${activeLetter}`
        ) /* on interroge l'API sur cette lettre */
        .then((response) => {
          const activeLetterTable =
            response.data
              .drinks; /* on récupère le tableau de la lettre (et tous ses objets) */
          if (activeLetterTable !== undefined) {
            /* si l'API a bien des objets coktails pour la lettre regardé */
            for (let j = 0; j < activeLetterTable.length; j += 1) {
              /* alors on récupère avec une boucle chaque objet qu'on push dans le table FullApiTable */
              setFinalCocktailTable((oldValue) => [
                ...oldValue /* On part du précédent tableau et on ajoute. Note : la fonction fléché permet de contourner le problème asynchrone. */,
                {
                  /* on ne push par contre que les éléments qui nous intéressent */
                  drinkId: response.data.drinks[j].id,
                  drinkName: response.data.drinks[j].strDrink,
                  drinkImage: response.data.drinks[j].strDrinkThumb,
                  drinkFavorite: false,
                  drinkGlass: response.data.drinks[j].strGlass,
                  drinkInstruction: response.data.drinks[j].strInstructions,
                  drinkIngredient1: response.data.drinks[j].strIngredient1,
                  drinkIngredient2: response.data.drinks[j].strIngredient2,
                  drinkIngredient3: response.data.drinks[j].strIngredient3,
                  drinkIngredient4: response.data.drinks[j].strIngredient4,
                  drinkIngredient5: response.data.drinks[j].strIngredient5,
                  drinkIngredient6: response.data.drinks[j].strIngredient6,
                  drinkIngredient7: response.data.drinks[j].strIngredient7,
                  drinkIngredient8: response.data.drinks[j].strIngredient8,
                  drinkIngredient9: response.data.drinks[j].strIngredient9,
                  drinkIngredient10: response.data.drinks[j].strIngredient10,
                  drinkIngredient11: response.data.drinks[j].strIngredient11,
                  drinkIngredient12: response.data.drinks[j].strIngredient12,
                  drinkIngredient13: response.data.drinks[j].strIngredient13,
                  drinkIngredient14: response.data.drinks[j].strIngredient14,
                  drinkIngredient15: response.data.drinks[j].strIngredient15,
                  drinkMeasure1: response.data.drinks[j].strMeasure1,
                  drinkMeasure2: response.data.drinks[j].strMeasure2,
                  drinkMeasure3: response.data.drinks[j].strMeasure3,
                  drinkMeasure4: response.data.drinks[j].strMeasure4,
                  drinkMeasure5: response.data.drinks[j].strMeasure5,
                  drinkMeasure6: response.data.drinks[j].strMeasure6,
                  drinkMeasure7: response.data.drinks[j].strMeasure7,
                  drinkMeasure8: response.data.drinks[j].strMeasure8,
                  drinkMeasure9: response.data.drinks[j].strMeasure9,
                  drinkMeasure10: response.data.drinks[j].strMeasure10,
                  drinkMeasure11: response.data.drinks[j].strMeasure11,
                  drinkMeasure12: response.data.drinks[j].strMeasure12,
                  drinkMeasure13: response.data.drinks[j].strMeasure13,
                  drinkMeasure14: response.data.drinks[j].strMeasure14,
                  drinkMeasure15: response.data.drinks[j].strMeasure15,
                },
              ]);
            }
          }
        })
        .catch((err) => console.error(FinalCocktailTable, err));
    }
  }

  return (
    <div className="App">
      <button type="button" onClick={getCocktail}>
        Load Coktails
      </button>
    </div>
  );
}

export default App;
