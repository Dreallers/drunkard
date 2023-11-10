import { useRouteLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardTwo from "./CardTwo";

function Card({ ingredients }) {
  const cocktailTable = useRouteLoaderData("App");

  const [cocktailTableFiltred, setcocktailTableFiltred] =
    useState(cocktailTable);

  const [cocktailsInput, setCocktailschInput] = useState("");

  useEffect(() => {
    const ingredientsSelected = ingredients
      // eslint-disable-next-line react/prop-types
      .filter((ingredient) => {
        return ingredient.selected === true;
      })
      .map((element) => {
        return element.bottleName;
      });

    const cocktailTableSelectedFiltred = cocktailTable.filter((cocktail) => {
      for (const ing of ingredientsSelected) {
        if (
          cocktail.drinkIngredient1 !== ing &&
          cocktail.drinkIngredient2 !== ing &&
          cocktail.drinkIngredient3 !== ing &&
          cocktail.drinkIngredient3 !== ing &&
          cocktail.drinkIngredient4 !== ing &&
          cocktail.drinkIngredient5 !== ing &&
          cocktail.drinkIngredient6 !== ing &&
          cocktail.drinkIngredient7 !== ing &&
          cocktail.drinkIngredient8 !== ing &&
          cocktail.drinkIngredient9 !== ing &&
          cocktail.drinkIngredient10 !== ing &&
          cocktail.drinkIngredient11 !== ing &&
          cocktail.drinkIngredient12 !== ing &&
          cocktail.drinkIngredient13 !== ing &&
          cocktail.drinkIngredient14 !== ing &&
          cocktail.drinkIngredient15 !== ing
        ) {
          return false;
        }
      }
      return true;
    });

    if (ingredientsSelected.length !== 0) {
      setcocktailTableFiltred(cocktailTableSelectedFiltred);
    } else {
      setcocktailTableFiltred(cocktailTable);
    }
  }, [ingredients]);

  return (
    <div className="displayArea">
      <div className="searchbar">
        <input
          type="text"
          value={cocktailsInput}
          placeholder="What are you looking for?"
          onInput={(event) => {
            setCocktailschInput(event.target.value);
          }}
        />
        <button type="button" onClick={() => setCocktailschInput("")}>
          ✖️
        </button>
      </div>
      <div className="card">
        {cocktailTableFiltred
          .filter((cocktail) => {
            return cocktail.drinkName
              .toLowerCase()
              .includes(cocktailsInput.toLowerCase());
          })
          .map((cocktail) => {
            return (
              <div key={cocktail.drinkId}>
                <CardTwo cocktail={cocktail} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

Card.propTypes = {
  ingredients: PropTypes.shape({
    id: PropTypes.number,
    bottleName: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    selected: PropTypes.bool,
    favorite: PropTypes.bool,
  }).isRequired,
};

export default Card;
