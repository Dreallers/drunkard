import React, { useState } from "react";
import IngredientCard from "./IngredientArea";
import CocktailFilter from "./CocktailFilter";
import { useOutletContext } from "./OutletContext";

function Bar() {
  const { favoriteTable, setfavoriteTable } = useOutletContext();
  const table = [
    {
      id: 1,
      bottleName: "Light rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Light rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 2,
      bottleName: "Applejack",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Applejack.png",
      selected: false,
      favorite: false,
    },
    {
      id: 3,
      bottleName: "Gin",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Gin.png",
      selected: false,
      favorite: false,
    },
    {
      id: 4,
      bottleName: "Dark rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Dark rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 5,
      bottleName: "Sweet Vermouth",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Sweet Vermouth.png",
      selected: false,
      favorite: false,
    },
    {
      id: 6,
      bottleName: "Strawberry schnapps",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Strawberry schnapps.png",
      selected: false,
      favorite: false,
    },
    {
      id: 7,
      bottleName: "Scotch",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Scotch.png",
      selected: false,
      favorite: false,
    },
    {
      id: 8,
      bottleName: "Apricot brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Apricot brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 9,
      bottleName: "Triple sec",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Triple sec.png",
      selected: false,
      favorite: false,
    },
    {
      id: 10,
      bottleName: "Southern Comfort",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Southern Comfort.png",
      selected: false,
      favorite: false,
    },
    {
      id: 11,
      bottleName: "Orange bitters",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Orange bitters.png",
      selected: false,
      favorite: false,
    },
    {
      id: 12,
      bottleName: "Brandy",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 13,
      bottleName: "Lemon vodka",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Lemon vodka.png",
      selected: false,
      favorite: false,
    },
    {
      id: 14,
      bottleName: "Blended whiskey",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Blended whiskey.png",
      selected: false,
      favorite: false,
    },
    {
      id: 15,
      bottleName: "Dry Vermouth",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Dry Vermouth.png",
      selected: false,
      favorite: false,
    },
    {
      id: 16,
      bottleName: "Amaretto",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Amaretto.png",
      selected: false,
      favorite: false,
    },
    {
      id: 17,
      bottleName: "Tea",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Tea.png",
      selected: false,
      favorite: false,
    },
    {
      id: 18,
      bottleName: "Champagne",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Champagne.png",
      selected: false,
      favorite: false,
    },
    {
      id: 19,
      bottleName: "Coffee liqueur",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Coffee liqueur.png",
      selected: false,
      favorite: false,
    },
    {
      id: 20,
      bottleName: "Bourbon",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Bourbon.png",
      selected: false,
      favorite: false,
    },
    {
      id: 21,
      bottleName: "Tequila",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Tequila.png",
      selected: false,
      favorite: false,
    },
    {
      id: 22,
      bottleName: "Vodka",
      image: "https://www.thecocktaildb.com/images/ingredients/vodka.png",
      type: "spirits",
      selected: false,
      favorite: false,
    },
    {
      id: 23,
      bottleName: "Añejo rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Añejo rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 24,
      bottleName: "Bitters",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Bitters.png",
      selected: false,
      favorite: false,
    },
    {
      id: 25,
      bottleName: "Sugar",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Sugar.png",
      selected: false,
      favorite: false,
    },
    {
      id: 26,
      bottleName: "Kahlua",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Kahlua.png",
      selected: false,
      favorite: false,
    },
    {
      id: 27,
      bottleName: "demerara Sugar",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/demerara Sugar.png",
      selected: false,
      favorite: false,
    },
    {
      strIngredient1: "Dubonnet Rouge",
      id: 28,
      bottleName: "Dubonnet Rouge",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Dubonnet Rouge.png",
      selected: false,
      favorite: false,
    },
    {
      id: 29,
      bottleName: "Watermelon",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Watermelon.png",
      selected: false,
      favorite: false,
    },
    {
      id: 30,
      bottleName: "Lime juice",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lime juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 31,
      bottleName: "Irish whiskey",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Irish whiskey.png",
      selected: false,
      favorite: false,
    },
    {
      id: 32,
      bottleName: "Apple brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Apple brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 33,
      bottleName: "Carbonated water",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Carbonated water.png",
      selected: false,
      favorite: false,
    },
    {
      id: 34,
      bottleName: "Cherry brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Cherry brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 35,
      bottleName: "Creme de Cacao",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Creme de Cacao.png",
      selected: false,
      favorite: false,
    },
    {
      id: 36,
      bottleName: "Grenadine",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Grenadine.png",
      selected: false,
      favorite: false,
    },
    {
      id: 37,
      bottleName: "Port",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Port.png",
      selected: false,
      favorite: false,
    },
    {
      id: 38,
      bottleName: "Coffee brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Coffee brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 39,
      bottleName: "Red wine",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Red wine.png",
      selected: false,
      favorite: false,
    },
    {
      id: 40,
      bottleName: "Rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 41,
      bottleName: "Grapefruit juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Grapefruit juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 42,
      bottleName: "Ricard",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Ricard.png",
      selected: false,
      favorite: false,
    },
    {
      id: 43,
      bottleName: "Sherry",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Sherry.png",
      selected: false,
      favorite: false,
    },
    {
      id: 44,
      bottleName: "Cognac",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Cognac.png",
      selected: false,
      favorite: false,
    },
    {
      id: 45,
      bottleName: "Sloe gin",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Sloe gin.png",
      selected: false,
      favorite: false,
    },
    {
      id: 46,
      bottleName: "Apple juice",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Apple juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 47,
      bottleName: "Pineapple juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Pineapple juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 48,
      bottleName: "Sloe gin",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Sloe gin.png",
      selected: false,
      favorite: false,
    },
    {
      id: 49,
      bottleName: "Sugar syrup",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Sugar syrup.png",
      selected: false,
      favorite: false,
    },
    {
      id: 50,
      bottleName: "Milk",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Milk.png",
      selected: false,
      favorite: false,
    },
    {
      id: 51,
      bottleName: "Strawberries",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Strawberries.png",
      selected: false,
      favorite: false,
    },
    {
      id: 52,
      bottleName: "Chocolate syrup",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Chocolate syrup.png",
      selected: false,
      favorite: false,
    },
    {
      id: 53,
      bottleName: "Yoghurt",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Yoghurt.png",
      selected: false,
      favorite: false,
    },
    {
      id: 54,
      bottleName: "Mango",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Mango.png",
      selected: false,
      favorite: false,
    },
    {
      id: 55,
      bottleName: "Ginger",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Ginger.png",
      selected: false,
      favorite: false,
    },
    {
      id: 56,
      bottleName: "Lime",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lime.png",
      selected: false,
      favorite: false,
    },
    {
      id: 57,
      bottleName: "Cantaloupe",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Cantaloupe.png",
      selected: false,
      favorite: false,
    },
    {
      id: 58,
      bottleName: "Berries",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Berries.png",
      selected: false,
      favorite: false,
    },
    {
      id: 59,
      bottleName: "Grapes",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Grapes.png",
      selected: false,
      favorite: false,
    },
    {
      id: 60,
      bottleName: "Kiwi",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Kiwi.png",
      selected: false,
      favorite: false,
    },
    {
      id: 61,
      bottleName: "Tomato juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Tomato juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 62,
      bottleName: "Cocoa powder",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Cocoa powder.png",
      selected: false,
      favorite: false,
    },
    {
      id: 63,
      bottleName: "Chocolate",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Chocolate.png",
      selected: false,
      favorite: false,
    },
    {
      id: 64,
      bottleName: "Heavy cream",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Heavy cream.png",
      selected: false,
      favorite: false,
    },
    {
      id: 65,
      bottleName: "Galliano",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Galliano.png",
      selected: false,
      favorite: false,
    },
    {
      id: 66,
      bottleName: "Peach Vodka",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Peach Vodka.png",
      selected: false,
      favorite: false,
    },
    {
      id: 67,
      bottleName: "Ouzo",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Ouzo.png",
      selected: false,
      favorite: false,
    },
    {
      id: 68,
      bottleName: "Coffee",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Coffee.png",
      selected: false,
      favorite: false,
    },
    {
      id: 69,
      bottleName: "Spiced rum",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Spiced rum.png",
      selected: false,
      favorite: false,
    },
    {
      id: 70,
      bottleName: "Water",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Water.png",
      selected: false,
      favorite: false,
    },
    {
      id: 71,
      bottleName: "Espresso",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Espresso.png",
      selected: false,
      favorite: false,
    },
    {
      id: 72,
      bottleName: "Angelica root",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Angelica root.png",
      selected: false,
      favorite: false,
    },
    {
      id: 73,
      bottleName: "Orange",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Orange.png",
      selected: false,
      favorite: false,
    },
    {
      id: 74,
      bottleName: "Cranberries",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Cranberries.png",
      selected: false,
      favorite: false,
    },
    {
      id: 75,
      bottleName: "Johnnie Walker",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Johnnie Walker.png",
      selected: false,
      favorite: false,
    },
    {
      id: 76,
      bottleName: "Apple cider",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Apple cider.png",
      selected: false,
      favorite: false,
    },
    {
      id: 77,
      bottleName: "Everclear",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Everclear.png",
      selected: false,
      favorite: false,
    },
    {
      id: 78,
      bottleName: "Cranberry juice",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Cranberry juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 79,
      bottleName: "Egg yolk",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Egg yolk.png",
      selected: false,
      favorite: false,
    },
    {
      id: 80,
      bottleName: "Egg",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Egg.png",
      selected: false,
      favorite: false,
    },
    {
      id: 81,
      bottleName: "Grape juice",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Grape juice.png",
      selected: false,
      favorite: false,
    },
    {
      id: 82,
      bottleName: "Peach nectar",
      type: "soft",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Peach nectar.png",
      selected: false,
      favorite: false,
    },
    {
      id: 83,
      bottleName: "Lemon",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lemon.png",
      selected: false,
      favorite: false,
    },
    {
      id: 84,
      bottleName: "Firewater",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Firewater.png",
      selected: false,
      favorite: false,
    },
    {
      id: 85,
      bottleName: "Lemonade",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Lemonade.png",
      selected: false,
      favorite: false,
    },
    {
      id: 86,
      bottleName: "Lager",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Lager.png",
      selected: false,
      favorite: false,
    },
    {
      id: 87,
      bottleName: "Whiskey",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Whiskey.png",
      selected: false,
      favorite: false,
    },
    {
      id: 88,
      bottleName: "Absolut Citron",
      type: "spirits",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Absolut Citron.png",
      selected: false,
      favorite: false,
    },
    {
      id: 89,
      bottleName: "Pisco",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Pisco.png",
      selected: false,
      favorite: false,
    },
    {
      id: 90,
      bottleName: "Irish cream",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Irish cream.png",
      selected: false,
      favorite: false,
    },
    {
      id: 91,
      bottleName: "Ale",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Ale.png",
      selected: false,
      favorite: false,
    },
    {
      id: 92,
      bottleName: "Chocolate liqueur",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Chocolate liqueur.png",
      selected: false,
      favorite: false,
    },
    {
      id: 93,
      bottleName: "Midori melon liqueur",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Midori melon liqueur.png",
      selected: false,
      favorite: false,
    },
    {
      id: 94,
      bottleName: "Sambuca",
      type: "liquors",
      image: "https://www.thecocktaildb.com/images/ingredients/Sambuca.png",
      selected: false,
      favorite: false,
    },
    {
      id: 95,
      bottleName: "Cider",
      type: "spirits",
      image: "https://www.thecocktaildb.com/images/ingredients/Cider.png",
      selected: false,
      favorite: false,
    },
    {
      id: 96,
      bottleName: "Sprite",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/Sprite.png",
      selected: false,
      favorite: false,
    },
    {
      id: 97,
      bottleName: "7-Up",
      type: "soft",
      image: "https://www.thecocktaildb.com/images/ingredients/7-Up.png",
      selected: false,
      favorite: false,
    },
    {
      id: 98,
      bottleName: "Blackberry brandy",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Blackberry brandy.png",
      selected: false,
      favorite: false,
    },
    {
      id: 99,
      bottleName: "Peppermint schnapps",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Peppermint schnapps.png",
      selected: false,
      favorite: false,
    },
    {
      id: 100,
      bottleName: "Creme de Cassis",
      type: "liquors",
      image:
        "https://www.thecocktaildb.com/images/ingredients/Creme de Cassis.png",
      selected: false,
      favorite: false,
    },
  ];
  const [ingredients, setIngredients] = useState(table);
  // let statusBtn = true;

  // function handleShowIng() {
  //   const ingredientID = document.getElementById("ingredientID");
  //   const cardAreaID = document.getElementById("cardAreaID");
  //   // const carteContainerID = document.getElementById("carteContainerID");
  //   const sideBtn = document.getElementById("sideBtn");
  //   statusBtn = !statusBtn;
  //   // console.log(statusBtn);

  //   if (!statusBtn) {
  //     // carteContainerID.classList.remove("noblur");
  //     // carteContainerID.classList.add("blurside");

  //     cardAreaID.classList.remove("noblur");
  //     cardAreaID.classList.add("blurside");

  //     ingredientID.classList.remove("hide");
  //     ingredientID.classList.add("show");

  //     sideBtn.classList.remove("sideIng");
  //     sideBtn.classList.add("middleIng");
  //   } else {
  //     // carteContainerID.classList.remove("blurside");
  //     // carteContainerID.classList.add("noblur");

  //     cardAreaID.classList.remove("blurside");
  //     cardAreaID.classList.add("noblur");

  //     ingredientID.classList.remove("show");
  //     ingredientID.classList.add("hide");

  //     sideBtn.classList.remove("middleIng");
  //     sideBtn.classList.add("sideIng");
  //   }
  // }

  // const ingredientID = document.getElementById("ingredientID");
  // console.log("ingredientID", ingredientID);
  // const rect = ingredientID.getBoundingClientRect();
  // console.log(rect.top, rect.right, rect.bottom, rect.left);

  return (
    <div className="globalBar">
      {/* <div
        id="sideBtn"
        type="button"
        role="presentation"
        className="sideIng"
        onClick={handleShowIng}
      /> */}
      <div id="ingredientID" className="ingredient hide">
        <IngredientCard
          setIngredients={setIngredients}
          ingredients={ingredients}
          table={table}
        />
      </div>
      <div id="cardAreaID" className="cardArea noblur">
        <CocktailFilter
          ingredients={ingredients}
          favoriteTable={favoriteTable}
          setfavoriteTable={setfavoriteTable}
        />
      </div>
    </div>
  );
}

export default Bar;
