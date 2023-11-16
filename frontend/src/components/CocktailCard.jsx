import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function CocktailCard({
  cocktail,
  startFlipped = true,
  onClick,
  favoriteTable,
  setfavoriteTable,
}) {
  const location = useLocation();

  const [retourne, setRetourne] = useState(startFlipped || false);
  const [isFavorite, setisFavorite] = useState(cocktail.drinkFavorite);

  const retournerCarte = () => {
    if (location.pathname !== "/quizz") {
      setRetourne(!retourne);
    }
  };

  const handleIsFavorite = (event) => {
    event.stopPropagation();
    // on récupère le contenu du state favoriteTable (donné par Card)
    const tempoFavoriteTable = favoriteTable;

    // si le on trouve notre élément comment déjà présent dans notre tableau de "sauvegarde" des favoris, alors on le cherche (via Index) et on le vire.
    if (isFavorite) {
      const index = tempoFavoriteTable.findIndex(
        (item) =>
          item.drinkId === cocktail.drinkId &&
          item.drinkName === cocktail.drinkName
      );
      if (index !== -1) {
        tempoFavoriteTable.splice(index, 1);
      }
      // sinon, on le rajoute
    } else {
      tempoFavoriteTable.push({
        drinkId: cocktail.drinkId,
        drinkName: cocktail.drinkName,
      });
    }

    // on met ensuite à jour notre state pour basculer le "on/off". Note : on le fait à la fin pour éviter un comportement asynchrone.
    setisFavorite((current) => !current);
    setfavoriteTable(tempoFavoriteTable);

    // on met à jour ensuite le localStorage avec notre tableau de favoris à jour
    localStorage.setItem("favoriteTable", JSON.stringify(tempoFavoriteTable));
  };

  useEffect(() => {
    // à chaque évolution de "isFavorite", on récupère le local storage pour MAJ notre state table favoris avec. Ce qui va ensuite permettre à Card de re-mapper dessus avec les dernières infos.
    if (localStorage.getItem("favoriteTable") === null) {
      setfavoriteTable([]);
    } else {
      setfavoriteTable(JSON.parse(localStorage.getItem("favoriteTable")));
    }
  }, [isFavorite]);

  useEffect(() => {
    // Ce useEffect permet qu'à chaque re-render de remettre chaque cocktails en favoris "true", si ils sont présent dans notre localStorage.
    const tempotable = JSON.parse(localStorage.getItem("favoriteTable"));
    if (tempotable) {
      if (tempotable.find((id) => id.drinkId === cocktail.drinkId)) {
        setisFavorite(true);
      }
    }
  }, []);

  // ici on fait le return de la card "unique" de chaque cocktails :
  return (
    <div
      tabIndex={0}
      role="button"
      className="cocktail-card"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          retournerCarte();
        }
      }}
    >
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
            <div className="display">
              {startFlipped && (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

CocktailCard.propTypes = {
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
  favoriteTable: PropTypes.shape({
    drinkId: PropTypes.number,
    drinkName: PropTypes.string,
  }).isRequired,
  startFlipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  // favoriteTable: PropTypes.array.isRequired,
  setfavoriteTable: PropTypes.func.isRequired,
};
export default CocktailCard;
