import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function IngredientCard({ setIngredients, ingredients }) {
  const [choicedIngredientType, setchoicedIngredientType] =
    useState(
      "liquors"
    ); /* permet d'avoir les liquors d'afficher au chargement */

  const [selector, setSelector] = useState("selected");

  const location = useLocation();

  useEffect(() => {
    setSelector(location.pathname === "/mybar" ? "favorite" : "selected");
  }, [location]);

  function handleClickSelected(ingredientId) {
    const copyIngredient = [
      ...ingredients,
    ]; /* on "deep"copy le tableau state en tableau "classique" pour pouvoir modifier un de ses éléments */
    const temporaryTable = copyIngredient.filter((element) => {
      /* le filter ne laisse passer que les return true dans le tableau temporaire */
      if (ingredientId === element.id) {
        const elementcopy = element;
        if (element[selector] === true) {
          elementcopy[selector] = false;
        } else {
          elementcopy[selector] = true;
        }
        console.info(element);
      }
      return true;
    });
    setIngredients(temporaryTable);
  }

  function handleIngredientType(e) {
    setchoicedIngredientType(
      e.target.value
    ); /* permet de changer le type d'ingrédient affiché (soft ou spirits ou liquors) apres le click */
  }
  return (
    <div className="IngredientArea">
      <div className="handleIngredientTypeContainer">
        <div className="handleIngredientType">
          <button
            type="button"
            value="liquors"
            onClick={(e) => handleIngredientType(e)}
            className={
              choicedIngredientType === "liquors" ? "Selected" : "NotSelected"
            }
          >
            Liquors
          </button>
          <button
            type="button"
            value="spirits"
            onClick={(e) => handleIngredientType(e)}
            className={
              choicedIngredientType === "spirits" ? "Selected" : "NotSelected"
            }
          >
            Spirit
          </button>
          <button
            type="button"
            value="soft"
            onClick={(e) => handleIngredientType(e)}
            className={
              choicedIngredientType === "soft" ? "Selected" : "NotSelected"
            }
          >
            Soft
          </button>
        </div>
      </div>
      <div className="neonBarContainer">
        <div className="neonBar" />
      </div>
      <div className="ingredientListContainer">
        {ingredients
          .filter((ingredient) => {
            return choicedIngredientType === ingredient.type;
          })
          .map((ingredient) => {
            return (
              <div className="Ingredientlist" key={ingredient.id}>
                <div className="bottleImage">
                  <img
                    className="bottleimagesrc"
                    src={ingredient.image}
                    alt=""
                  />
                </div>
                <div className="button">
                  <button
                    type="button"
                    onClick={() => handleClickSelected(ingredient.id)}
                    className={
                      ingredient[selector] === true ? "Selected" : "NotSelected"
                    }
                  >
                    {ingredient.bottleName}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="arrow" />
    </div>
  );
}

IngredientCard.propTypes = {
  setIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      bottleName: PropTypes.string,
      type: PropTypes.string,
      image: PropTypes.string,
      selected: PropTypes.bool,
      favorite: PropTypes.bool,
    })
  ).isRequired,
};

export default IngredientCard;
