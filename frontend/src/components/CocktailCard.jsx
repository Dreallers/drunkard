import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CocktailCard({
  cocktail,
  favoriteTable,
  setfavoriteTable,
  handleonClick,
}) {
  const [retourne, setRetourne] = useState(true);
  const [isFavorite, setisFavorite] = useState(false);

  const retournerCarte = () => {
    setRetourne(!retourne);
  };

  const handleIsFavorite = (event) => {
    event.stopPropagation();
    const tempoFavoriteTable = favoriteTable;

    if (isFavorite) {
      const index = tempoFavoriteTable.findIndex(
        (item) =>
          item.drinkId === cocktail.drinkId &&
          item.drinkName === cocktail.drinkName
      );
      if (index !== -1) {
        tempoFavoriteTable.splice(index, 1);
      }
    } else {
      tempoFavoriteTable.push({
        drinkId: cocktail.drinkId,
        drinkName: cocktail.drinkName,
      });
    }

    setisFavorite((current) => !current);
    setfavoriteTable(tempoFavoriteTable);
    localStorage.setItem("favoriteTable", JSON.stringify(tempoFavoriteTable));
  };

  useEffect(() => {
    if (localStorage.getItem("favoriteTable") === null) {
      setfavoriteTable([]);
    } else {
      setfavoriteTable(JSON.parse(localStorage.getItem("favoriteTable")));
    }
  }, [isFavorite]);

  useEffect(() => {
    const tempotable = JSON.parse(localStorage.getItem("favoriteTable"));
    if (tempotable) {
      if (tempotable.find((id) => id.drinkId === cocktail.drinkId)) {
        setisFavorite(true);
      }
    }
  }, []);

  return (
    <div
      onClick={() => {
        retournerCarte();
        handleonClick();
      }}
      aria-hidden
      className={`carte ${retourne ? "retourne" : ""}`}
    >
      {retourne ? (
        <div className="carteContainer">
          <div
            style={{
              backgroundImage: `url("${cocktail.drinkImage}")`,
              backgroundSize: "cover",
            }}
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
        </div>
      ) : (
        <div className="carteContainer">
          <div
            style={{
              backgroundImage: `url("${cocktail.drinkImage}")`,
              backgroundSize: "cover",
            }}
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
                      {cocktail.drinkIngredient1 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient1}</p>
                          <p>{cocktail.drinkMeasure1}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient2 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient2}</p>
                          <p>{cocktail.drinkMeasure2}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient3 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient3}</p>
                          <p>{cocktail.drinkMeasure3}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient4 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient4}</p>
                          <p>{cocktail.drinkMeasure4}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient5 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient5}</p>
                          <p>{cocktail.drinkMeasure5}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient6 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient6}</p>
                          <p>{cocktail.drinkMeasure6}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient7 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient7}</p>
                          <p>{cocktail.drinkMeasure7}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient8 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient8}</p>
                          <p>{cocktail.drinkMeasure8}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient9 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient9}</p>
                          <p>{cocktail.drinkMeasure9}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient10 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient10}</p>
                          <p>{cocktail.drinkMeasure10}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient11 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient11}</p>
                          <p>{cocktail.drinkMeasure11}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient12 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient12}</p>
                          <p>{cocktail.drinkMeasure12}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient13 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient13}</p>
                          <p>{cocktail.drinkMeasure13}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient14 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient14}</p>
                          <p>{cocktail.drinkMeasure14}</p>
                        </div>
                      )}
                      {cocktail.drinkIngredient15 != null && (
                        <div className="coupleIngMeas">
                          <p>{cocktail.drinkIngredient15}</p>
                          <p>{cocktail.drinkMeasure15}</p>
                        </div>
                      )}
                    </div>
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

CocktailCard.propTypes = {
  cocktail: PropTypes.shape({
    drinkId: PropTypes.string,
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
  favoriteTable: PropTypes.arrayOf(
    PropTypes.shape({
      drinkId: PropTypes.string,
      drinkName: PropTypes.string,
    })
  ).isRequired,
  handleonClick: PropTypes.func.isRequired,
  setfavoriteTable: PropTypes.func.isRequired,
};

export default CocktailCard;
