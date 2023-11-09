import React, { useState } from "react";
import PropTypes from "prop-types";

function CardTwo({ cocktail }) {
  const [retourne, setRetourne] = useState(true);
  const [isFavorite, setisFavorite] = useState(cocktail.drinkFavorite);
  const retournerCarte = () => {
    setRetourne(!retourne);
  };
  const handleIsFavorite = (event) => {
    event.stopPropagation();
    setisFavorite((current) => !current);
  };

  return (
    <div
      onClick={retournerCarte}
      aria-hidden
      className={`carte ${retourne ? "retourne" : ""}`}
    >
      {retourne ? (
        <div
          style={{ backgroundImage: `url("${cocktail.drinkImage}")` }}
          className="face recto"
        >
          <div className="name">
            <p> {cocktail.drinkName} </p>
          </div>
          <button className="heart" type="button" onClick={handleIsFavorite}>
            {isFavorite ? (
              <img src="/coeurPlein.png" alt="coeur plein" />
            ) : (
              <img src="/coeurVide.png" alt="coeur vide" />
            )}
          </button>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url("${cocktail.drinkImage}")` }}
          className="face verso"
        >
          <div className="garen">
            <div className="blur">
              <div className="tahmKench">
                <div className="lillia">
                  <div className="name">
                    <p> {cocktail.drinkName} </p>
                  </div>
                </div>
                <button
                  className="heart"
                  type="button"
                  onClick={handleIsFavorite}
                >
                  {isFavorite ? (
                    <img src="/coeurPlein.png" alt="coeur plein" />
                  ) : (
                    <img src="/coeurVide.png" alt="coeur vide" />
                  )}
                </button>
                <div className="display">
                  <p className="instruction"> {cocktail.drinkInstruction} </p>
                  <div className="recette">
                    <ul className="ingredient">
                      {cocktail.drinkIngredient1 != null && (
                        <li>{cocktail.drinkIngredient1}</li>
                      )}

                      {cocktail.drinkIngredient2 != null && (
                        <li>{cocktail.drinkIngredient2}</li>
                      )}
                      {cocktail.drinkIngredient3 != null && (
                        <li>{cocktail.drinkIngredient3}</li>
                      )}
                      {cocktail.drinkIngredient4 != null && (
                        <li>{cocktail.drinkIngredient4}</li>
                      )}
                      {cocktail.drinkIngredient5 != null && (
                        <li>{cocktail.drinkIngredient5}</li>
                      )}
                      {cocktail.drinkIngredient6 != null && (
                        <li>{cocktail.drinkIngredient6}</li>
                      )}
                      {cocktail.drinkIngredient7 != null && (
                        <li>{cocktail.drinkIngredient7}</li>
                      )}
                      {cocktail.drinkIngredient8 != null && (
                        <li>{cocktail.drinkIngredient8}</li>
                      )}
                      {cocktail.drinkIngredient9 != null && (
                        <li>{cocktail.drinkIngredient9}</li>
                      )}
                      {cocktail.drinkIngredient10 != null && (
                        <li>{cocktail.drinkIngredient10}</li>
                      )}
                      {cocktail.drinkIngredient11 != null && (
                        <li>{cocktail.drinkIngredient11}</li>
                      )}
                      {cocktail.drinkIngredient12 != null && (
                        <li>{cocktail.drinkIngredient12}</li>
                      )}
                      {cocktail.drinkIngredient13 != null && (
                        <li>{cocktail.drinkIngredient13}</li>
                      )}
                      {cocktail.drinkIngredient14 != null && (
                        <li>{cocktail.drinkIngredient14}</li>
                      )}
                      {cocktail.drinkIngredient15 != null && (
                        <li>{cocktail.drinkIngredient15}</li>
                      )}
                    </ul>
                    <ul className="measures">
                      {cocktail.drinkMeasure1 != null && (
                        <li>{cocktail.drinkMeasure1}</li>
                      )}
                      {cocktail.drinkMeasure2 != null && (
                        <li>{cocktail.drinkMeasure2}</li>
                      )}
                      {cocktail.drinkMeasure3 != null && (
                        <li>{cocktail.drinkMeasure3}</li>
                      )}
                      {cocktail.drinkMeasure4 != null && (
                        <li>{cocktail.drinkMeasure4}</li>
                      )}
                      {cocktail.drinkMeasure5 != null && (
                        <li>{cocktail.drinkMeasure5}</li>
                      )}
                      {cocktail.drinkMeasure6 != null && (
                        <li>{cocktail.drinkMeasure6}</li>
                      )}
                      {cocktail.drinkMeasure7 != null && (
                        <li>{cocktail.drinkMeasure7}</li>
                      )}
                      {cocktail.drinkMeasure8 != null && (
                        <li>{cocktail.drinkMeasure8}</li>
                      )}
                      {cocktail.drinkMeasure9 != null && (
                        <li>{cocktail.drinkMeasure9}</li>
                      )}
                      {cocktail.drinkMeasure10 != null && (
                        <li>{cocktail.drinkMeasure10}</li>
                      )}
                      {cocktail.drinkMeasure11 != null && (
                        <li>{cocktail.drinkMeasure11}</li>
                      )}
                      {cocktail.drinkMeasure12 != null && (
                        <li>{cocktail.drinkMeasure12}</li>
                      )}
                      {cocktail.drinkMeasure13 != null && (
                        <li>{cocktail.drinkMeasure13}</li>
                      )}
                      {cocktail.drinkMeasure14 != null && (
                        <li>{cocktail.drinkMeasure14}</li>
                      )}
                      {cocktail.drinkMeasure15 != null && (
                        <li>{cocktail.drinkMeasure15}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

CardTwo.propTypes = {
  cocktail: PropTypes.shape({
    drinkId: PropTypes.number,
    drinkName: PropTypes.string,
    drinkImage: PropTypes.string,
    drinkFavorite: PropTypes.bool,
    drinkInstruction: PropTypes.string,
    drinkIngredient1: PropTypes.string,
    drinkIngredient2: PropTypes.string,
    drinkIngredient3: PropTypes.string,
    drinkIngredient4: PropTypes.string,
    drinkIngredient5: PropTypes.string,
    drinkIngredient6: PropTypes.string,
    drinkIngredient7: PropTypes.string,
    drinkIngredient8: PropTypes.string,
    drinkIngredient9: PropTypes.string,
    drinkIngredient10: PropTypes.string,
    drinkIngredient11: PropTypes.string,
    drinkIngredient12: PropTypes.string,
    drinkIngredient13: PropTypes.string,
    drinkIngredient14: PropTypes.string,
    drinkIngredient15: PropTypes.string,
    drinkMeasure1: PropTypes.string,
    drinkMeasure2: PropTypes.string,
    drinkMeasure3: PropTypes.string,
    drinkMeasure4: PropTypes.string,
    drinkMeasure5: PropTypes.string,
    drinkMeasure6: PropTypes.string,
    drinkMeasure7: PropTypes.string,
    drinkMeasure8: PropTypes.string,
    drinkMeasure9: PropTypes.string,
    drinkMeasure10: PropTypes.string,
    drinkMeasure11: PropTypes.string,
    drinkMeasure12: PropTypes.string,
    drinkMeasure13: PropTypes.string,
    drinkMeasure14: PropTypes.string,
    drinkMeasure15: PropTypes.string,
    selected: PropTypes.bool,
    favorite: PropTypes.bool,
  }).isRequired,
};
export default CardTwo;
