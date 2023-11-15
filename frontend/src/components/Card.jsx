import { useRouteLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardTwo from "./CardTwo";

function Card({ ingredients }) {
  const [favoriteTable, setfavoriteTable] = useState([]); // ce state va permettre de faire le lien avec CardTwo pour savoir quels coktails ont été mis en favoris (on l'utilise avec un localStorage pour conserver l'historique même quand on rafraichit la page)
  // note : on aurait pu positionner ce stage un niveau au dessus (sur APP par ex) pour tout gérer sans localStorage mais on aurait par contre perdu le données en cas de rafraichissement de la page
  const cocktailTable = useRouteLoaderData("App");

  const [cocktailTableFiltred, setcocktailTableFiltred] =
    useState(cocktailTable);

  const [cocktailsInput, setCocktailschInput] = useState("");

  const [selector, setSelector] = useState("all");

  const location = useLocation();

  // Permet de modifier le comportement de la ingredient area selon la page :
  useEffect(() => {
    setSelector(location.pathname === "/mybar" ? "favorite" : "selected");
  }, [location]);

  useEffect(() => {
    // on récupère dans un tableau tout les ingrédients sélectionnés (selon le state favorite ou selected en fonction de la page)
    const ingredientsSelected = ingredients
      // eslint-disable-next-line react/prop-types
      .filter((ingredient) => {
        return ingredient[selector] === true;
      })
      .map((element) => {
        return element.bottleName;
      });

    let cocktailTableSelectedFiltred = [];
    const cocktailTableSelected = cocktailTable;
    // on récupère les cocktails dont les ingrédients sont présent dans la selection d'ingrédient (menu de gauche)
    cocktailTableSelectedFiltred = cocktailTableSelected.filter((cocktail) => {
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

    // si aucun ingrédient n'a été selectionné, on veut afficher tout les cocktails de l'API :
    // le tableau cocktailTableFiltred va être le tableau sur lequel le MAP va être réalisé
    if (ingredientsSelected.length !== 0) {
      setcocktailTableFiltred(cocktailTableSelectedFiltred);
    } else {
      setcocktailTableFiltred(cocktailTable);
    }
  }, [ingredients, selector]);

  return (
    // Search bar pour ensuite filtrer le map selon ce qui est tapé.
    <div className="displayArea">
      <div className="searchbar">
        <input
          type="text"
          placeholder="What are you looking for?"
          onInput={(event) => {
            setCocktailschInput(event.target.value);
          }}
        />
      </div>
      {/* On réalise le map pour générer chaque CARD (via composant CardTwo) en utilisant le tableau  ci dessus (cocktailTableFiltred) */}
      <div className="card">
        {/* si l'utilisateur est sur /mybar, on filtre uniquement les cocktails qui ont été mis en favoris (via state isFavorite) et on filtre aussi avec input SEARCHBAR */}
        {location.pathname === "/mybar"
          ? cocktailTableFiltred
              .filter((cocktail) => {
                if (
                  cocktail.drinkName
                    .toLowerCase()
                    .includes(cocktailsInput.toLowerCase()) &&
                  favoriteTable.find((id) => id.drinkId === cocktail.drinkId)
                ) {
                  return true;
                }
                return false;
              })
              .map((cocktail) => {
                return (
                  <div key={cocktail.drinkId}>
                    <CardTwo
                      cocktail={cocktail}
                      favoriteTable={favoriteTable}
                      setfavoriteTable={setfavoriteTable}
                    />
                  </div>
                );
              })
          : // si l'utilisateur est sur home, on filtre uniquement selon inuput SEARCHBAR
            cocktailTableFiltred
              .filter((cocktail) => {
                return cocktail.drinkName
                  .toLowerCase()
                  .includes(cocktailsInput.toLowerCase());
              })
              .map((cocktail) => {
                return (
                  <div key={cocktail.drinkId}>
                    <CardTwo
                      cocktail={cocktail}
                      favoriteTable={favoriteTable}
                      setfavoriteTable={setfavoriteTable}
                    />
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
