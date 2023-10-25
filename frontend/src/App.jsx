import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
                  drinkId: response.data.drinks[j].idDrink,
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

  /* Tableau bouteille alcool avec images */
  /* const [Ingredients, setIngredients] = useState([ */
  const tableIngredients = [
    {
      id: 1,
      name: "Light rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Light rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 2,
      name: "Applejack",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Applejack.png",
      selected: false,
      favorite: false,
    },
    {
      id: 3,
      name: "Gin",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Gin.png",
      selected: false,
      favorite: false,
    },
    {
      id: 4,
      name: "Dark rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Dark rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 5,
      name: "Sweet Vermouth",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Sweet Vermouth.png",
      selected: false,
      favorite: false,
    },
    {
      id: 6,
      name: "Strawberry schnapps",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Strawberry schnapps.png",
      selected: false,
      favorite: false,
    },
    {
      id: 7,
      name: "Scotch",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Scotch.png",
      selected: false,
      favorite: false,
    },
    {
      id: 8,
      name: "Apricot brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Apricot brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 9,
      name: "Triple sec",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Triple sec.png",
      selected: false,
      favorite: false,
    },
    {
      id: 10,
      name: "Southern Comfort",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Southern Comfort.png",
      selected: false,
      favorite: false,
    },
    {
      id: 11,
      name: "Orange bitters",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Orange bitters.png",
      selected: false,
      favorite: false,
    },
    {
      id: 12,
      name: "Brandy",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 13,
      name: "Lemon vodka",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Lemon vodka.png",
      selected: false,
      favorite: false,
    },
    {
      id: 14,
      name: "Blended whiskey",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Blended whiskey.png",
      selected: false,
      favorite: false,
    },
    {
      id: 15,
      name: "Dry Vermouth",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Dry Vermouth.png",
      selected: false,
      favorite: false,
    },
    {
      id: 16,
      name: "Amaretto",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Amaretto.png",
      selected: false,
      favorite: false,
    },
    {
      id: 17,
      name: "Tea",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Tea.png",
      selected: false,
      favorite: false,
    },
    {
      id: 18,
      name: "Champagne",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Champagne.png",
      selected: false,
      favorite: false,
    },
    {
      id: 19,
      name: "Coffee liqueur",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Coffee liqueur.png",
      selected: false,
      favorite: false,
    },
    {
      id: 20,
      name: "Bourbon",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Bourbon.png",
      selected: false,
      favorite: false,
    },
    {
      id: 21,
      name: "Tequila",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Tequila.png",
      selected: false,
      favorite: false,
    },
    {
      id: 22,
      name: "Vodka",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Vodka.png",
      selected: false,
      favorite: false,
    },
    {
      id: 23,
      name: "Añejo rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Añejo rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 24,
      name: "Bitters",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Bitters.png",
      selected: false,
      favorite: false,
    },
    {
      id: 25,
      name: "Sugar",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Sugar.png",
      selected: false,
      favorite: false,
    },
    {
      id: 26,
      name: "Kahlua",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Kahlua.png",
      selected: false,
      favorite: false,
    },
    {
      id: 27,
      name: "demerara Sugar",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/demerara Sugar.png",
      selected: false,
      favorite: false,
    },
    {
      strIngredient1: "Dubonnet Rouge",
      id: 28,
      name: "Dubonnet Rouge",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Dubonnet Rouge.png",
      selected: false,
      favorite: false,
    },
    {
      id: 29,
      name: "Watermelon",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Watermelon.png",
      selected: false,
      favorite: false,
    },
    {
      id: 30,
      name: "Lime juice",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lime juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 31,
      name: "Irish whiskey",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Irish whiskey.png",
      selected: false,
      favorite: false,
    },
    {
      id: 32,
      name: "Apple brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Apple brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 33,
      name: "Carbonated water",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Carbonated water.png",
      selected: false,
      favorite: false,
    },
    {
      id: 34,
      name: "Cherry brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Cherry brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 35,
      name: "Creme de Cacao",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Creme de Cacao.png",
      selected: false,
      favorite: false,
    },
    {
      id: 36,
      name: "Grenadine",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Grenadine.png",
      selected: false,
      favorite: false,
    },
    {
      id: 37,
      name: "Port",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Port.png",
      selected: false,
      favorite: false,
    },
    {
      id: 38,
      name: "Coffee brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Coffee brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 39,
      name: "Red wine",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Red wine.png",
      selected: false,
      favorite: false,
    },
    {
      id: 40,
      name: "Rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 41,
      name: "Grapefruit juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Grapefruit juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 42,
      name: "Ricard",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Ricard.png",
      selected: false,
      favorite: false,
    },
    {
      id: 43,
      name: "Sherry",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Sherry.png",
      selected: false,
      favorite: false,
    },
    {
      id: 44,
      name: "Cognac",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Cognac.png",
      selected: false,
      favorite: false,
    },
    {
      id: 45,
      name: "Sloe gin",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Sloe gin.png",
      selected: false,
      favorite: false,
    },
    {
      id: 46,
      name: "Apple juice",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Apple juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 47,
      name: "Pineapple juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Pineapple juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 48,
      name: "Sloe gin",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Sloe gin.png",
      selected: false,
      favorite: false,
    },
    {
      id: 49,
      name: "Sugar syrup",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Sugar syrup.png",
      selected: false,
      favorite: false,
    },
    {
      id: 50,
      name: "Milk",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Milk.png",
      selected: false,
      favorite: false,
    },
    {
      id: 51,
      name: "Strawberries",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Strawberries.png",
      selected: false,
      favorite: false,
    },
    {
      id: 52,
      name: "Chocolate syrup",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Chocolate syrup.png",
      selected: false,
      favorite: false,
    },
    {
      id: 53,
      name: "Yoghurt",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Yoghurt.png",
      selected: false,
      favorite: false,
    },
    {
      id: 54,
      name: "Mango",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Mango.png",
      selected: false,
      favorite: false,
    },
    {
      id: 55,
      name: "Ginger",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Ginger.png",
      selected: false,
      favorite: false,
    },
    {
      id: 56,
      name: "Lime",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lime.png",
      selected: false,
      favorite: false,
    },
    {
      id: 57,
      name: "Cantaloupe",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Cantaloupe.png",
      selected: false,
      favorite: false,
    },
    {
      id: 58,
      name: "Berries",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Berries.png",
      selected: false,
      favorite: false,
    },
    {
      id: 59,
      name: "Grapes",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Grapes.png",
      selected: false,
      favorite: false,
    },
    {
      id: 60,
      name: "Kiwi",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Kiwi.png",
      selected: false,
      favorite: false,
    },
    {
      id: 61,
      name: "Tomato juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Tomato juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 62,
      name: "Cocoa powder",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Cocoa powder.png",
      selected: false,
      favorite: false,
    },
    {
      id: 63,
      name: "Chocolate",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Chocolate.png",
      selected: false,
      favorite: false,
    },
    {
      id: 64,
      name: "Heavy cream",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Heavy cream.png",
      selected: false,
      favorite: false,
    },
    {
      id: 65,
      name: "Galliano",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Galliano.png",
      selected: false,
      favorite: false,
    },
    {
      id: 66,
      name: "Peach Vodka",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Peach Vodka.png",
      selected: false,
      favorite: false,
    },
    {
      id: 67,
      name: "Ouzo",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Ouzo.png",
      selected: false,
      favorite: false,
    },
    {
      id: 68,
      name: "Coffee",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Coffee.png",
      selected: false,
      favorite: false,
    },
    {
      id: 69,
      name: "Spiced rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Spiced rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 70,
      name: "Water",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Water.png",
      selected: false,
      favorite: false,
    },
    {
      id: 71,
      name: "Espresso",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Espresso.png",
      selected: false,
      favorite: false,
    },
    {
      id: 72,
      name: "Angelica root",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Angelica root.png",
      selected: false,
      favorite: false,
    },
    {
      id: 73,
      name: "Orange",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Orange.png",
      selected: false,
      favorite: false,
    },
    {
      id: 74,
      name: "Cranberries",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Cranberries.png",
      selected: false,
      favorite: false,
    },
    {
      id: 75,
      name: "Johnnie Walker",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Johnnie Walker.png",
      selected: false,
      favorite: false,
    },
    {
      id: 76,
      name: "Apple cider",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Apple cider.png",
      selected: false,
      favorite: false,
    },
    {
      id: 77,
      name: "Everclear",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Everclear.png",
      selected: false,
      favorite: false,
    },
    {
      id: 78,
      name: "Cranberry juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Cranberry juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 79,
      name: "Egg yolk",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Egg yolk.png",
      selected: false,
      favorite: false,
    },
    {
      id: 80,
      name: "Egg",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Egg.png",
      selected: false,
      favorite: false,
    },
    {
      id: 81,
      name: "Grape juice",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Grape juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 82,
      name: "Peach nectar",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Peach nectar.png",
      selected: false,
      favorite: false,
    },
    {
      id: 83,
      name: "Lemon",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lemon.png",
      selected: false,
      favorite: false,
    },
    {
      id: 84,
      name: "Firewater",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Firewater.png",
      selected: false,
      favorite: false,
    },
    {
      id: 85,
      name: "Lemonade",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lemonade.png",
      selected: false,
      favorite: false,
    },
    {
      id: 86,
      name: "Lager",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Lager.png",
      selected: false,
      favorite: false,
    },
    {
      id: 87,
      name: "Whiskey",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Whiskey.png",
      selected: false,
      favorite: false,
    },
    {
      id: 88,
      name: "Absolut Citron",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Absolut Citron.png",
      selected: false,
      favorite: false,
    },
    {
      id: 89,
      name: "Pisco",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Pisco.png",
      selected: false,
      favorite: false,
    },
    {
      id: 90,
      name: "Irish cream",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Irish cream.png",
      selected: false,
      favorite: false,
    },
    {
      id: 91,
      name: "Ale",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Ale.png",
      selected: false,
      favorite: false,
    },
    {
      id: 92,
      name: "Chocolate liqueur",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Chocolate liqueur.png",
      selected: false,
      favorite: false,
    },
    {
      id: 93,
      name: "Midori melon liqueur",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Midori melon liqueur.png",
      selected: false,
      favorite: false,
    },
    {
      id: 94,
      name: "Sambuca",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Sambuca.png",
      selected: false,
      favorite: false,
    },
    {
      id: 95,
      name: "Cider",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Cider.png",
      selected: false,
      favorite: false,
    },
    {
      id: 96,
      name: "Sprite",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Sprite.png",
      selected: false,
      favorite: false,
    },
    {
      id: 97,
      name: "7-Up",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/7-Up.png",
      selected: false,
      favorite: false,
    },
    {
      id: 98,
      name: "Blackberry brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Blackberry brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 99,
      name: "Peppermint schnapps",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Peppermint schnapps.png",
      selected: false,
      favorite: false,
    },
    {
      id: 100,
      name: "Creme de Cassis",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Creme de Cassis.png",
      selected: false,
      favorite: false,
    },
  ];

  console.info(tableIngredients);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <button type="button" onClick={getCocktail}>
          Load Coktails
        </button>
        {/* <componenet setIngredients={setIngredients} Ingredients={Ingredients} /> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
