import { useRouteLoaderData } from "react-router-dom";

function Card() {
  const cocktailTable = useRouteLoaderData("App");
  return (
    <div className="cardArea">
      {cocktailTable.map((cocktail) => {
        return (
          <div className="card" key={cocktail.drinkId}>
            <div className="cardName">{cocktail.drinkName}</div>
            <div className="cardIngredients">
              <div>{cocktail.drinkIngredient1}</div>
              <div>{cocktail.drinkIngredient2}</div>
              <div>{cocktail.drinkIngredient3}</div>
              <div>{cocktail.drinkIngredient4}</div>
              <div>{cocktail.drinkIngredient5}</div>
              <div>{cocktail.drinkIngredient6}</div>
              <div>{cocktail.drinkIngredient7}</div>
              <div>{cocktail.drinkIngredient8}</div>
              <div>{cocktail.drinkIngredient9}</div>
              <div>{cocktail.drinkIngredient10}</div>
              <div>{cocktail.drinkIngredient11}</div>
              <div>{cocktail.drinkIngredient12}</div>
              <div>{cocktail.drinkIngredient13}</div>
              <div>{cocktail.drinkIngredient14}</div>
              <div>{cocktail.drinkIngredient15}</div>
            </div>
          </div>
        );
      })}
      {cocktailTable[0].drinkName}
    </div>
  );
}

export default Card;
