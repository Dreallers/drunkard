import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import axios from "axios";

import App from "./App";
import Mybar from "./components/Mybar";
import Quiz from "./components/Quiz";
import Homepage from "./components/Homepage";
import Bar from "./components/Bar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "App",
    loader: async () => {
      const finalCocktailTable = [];
      /* Boucle pour lire l'API de a à z: */
      const results = [];
      for (let i = 97; i <= 122; i += 1) {
        const activeLetter = String.fromCharCode(i); /* on récupère la lettre */
        results.push(
          axios.get(
            `https:www.thecocktaildb.com/api/json/v1/1/search.php?f=${activeLetter}`
          )
        ); /* on interroge l'API sur cette lettre */
      }
      const response = await Promise.all(results);
      for (const letter of response) {
        const activeLetterTable = letter.data.drinks;
        if (activeLetterTable) {
          /* si l'API a bien des objets coktails pour la lettre regardé */
          for (let j = 0; j < activeLetterTable.length; j += 1) {
            /* alors on récupère avec une boucle chaque objet qu'on push dans le table FullApiTable */
            finalCocktailTable.push({
              drinkId: letter.data.drinks[j].idDrink,
              drinkName: letter.data.drinks[j].strDrink,
              drinkImage: letter.data.drinks[j].strDrinkThumb,
              drinkGlass: letter.data.drinks[j].strGlass,
              drinkInstruction: letter.data.drinks[j].strInstructions,
              drinkIngredient1: letter.data.drinks[j].strIngredient1,
              drinkIngredient2: letter.data.drinks[j].strIngredient2,
              drinkIngredient3: letter.data.drinks[j].strIngredient3,
              drinkIngredient4: letter.data.drinks[j].strIngredient4,
              drinkIngredient5: letter.data.drinks[j].strIngredient5,
              drinkIngredient6: letter.data.drinks[j].strIngredient6,
              drinkIngredient7: letter.data.drinks[j].strIngredient7,
              drinkIngredient8: letter.data.drinks[j].strIngredient8,
              drinkIngredient9: letter.data.drinks[j].strIngredient9,
              drinkIngredient10: letter.data.drinks[j].strIngredient10,
              drinkIngredient11: letter.data.drinks[j].strIngredient11,
              drinkIngredient12: letter.data.drinks[j].strIngredient12,
              drinkIngredient13: letter.data.drinks[j].strIngredient13,
              drinkIngredient14: letter.data.drinks[j].strIngredient14,
              drinkIngredient15: letter.data.drinks[j].strIngredient15,
              drinkMeasure1: letter.data.drinks[j].strMeasure1,
              drinkMeasure2: letter.data.drinks[j].strMeasure2,
              drinkMeasure3: letter.data.drinks[j].strMeasure3,
              drinkMeasure4: letter.data.drinks[j].strMeasure4,
              drinkMeasure5: letter.data.drinks[j].strMeasure5,
              drinkMeasure6: letter.data.drinks[j].strMeasure6,
              drinkMeasure7: letter.data.drinks[j].strMeasure7,
              drinkMeasure8: letter.data.drinks[j].strMeasure8,
              drinkMeasure9: letter.data.drinks[j].strMeasure9,
              drinkMeasure10: letter.data.drinks[j].strMeasure10,
              drinkMeasure11: letter.data.drinks[j].strMeasure11,
              drinkMeasure12: letter.data.drinks[j].strMeasure12,
              drinkMeasure13: letter.data.drinks[j].strMeasure13,
              drinkMeasure14: letter.data.drinks[j].strMeasure14,
              drinkMeasure15: letter.data.drinks[j].strMeasure15,
            });
          }
        }
      } /* on récupère le tableau de la lettre (et tous ses objets) */

      return finalCocktailTable;
    },
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "home",
        element: (
          <div>
            <Bar />
          </div>
        ),
      },
      {
        path: "mybar",
        element: <Mybar />,
      },
      {
        path: "quizz",
        element: <Quiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
