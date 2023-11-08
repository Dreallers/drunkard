import PropTypes from "prop-types";
import React, { useState } from "react";

function Card({ cocktail }) {
  const [retourne, setRetourne] = useState(false);
  const [isFavorite, setisFavorite] = useState(cocktail.drinkFavorite);

  const retournerCarte = () => {
    setRetourne(!retourne);
  };
  const handleIsFavorite = () => {
    setisFavorite((current) => !current);
  };
  // button favori utilisable si j'enleve le button switch et remet le onclick sur la div globale?
  return (
    <div className={`carte ${retourne ? "retourne" : ""}`}>
      <button type="button" className="switch" onClick={retournerCarte}>
        tourne ma petite
      </button>
      <div className="face recto">
        <img src={cocktail.drinkImage} alt={cocktail.drinkName} />
        <p> {cocktail.drinkName} </p>
        <button type="button" onClick={handleIsFavorite}>
          <div className={isFavorite ? "favorite" : "notFavorite"} />
        </button>
      </div>
      <div className="face verso">
        <img src={cocktail.drinkImage} alt={cocktail.drinkName} />
        <p> {cocktail.drinkName} </p>
        <button type="button" onClick={handleIsFavorite}>
          <div className={isFavorite ? "favorite" : "notFavorite"} />
        </button>
        <p className="instruction"> {cocktail.drinkInstruction} </p>
        <ul className="ingredient">
          <li>{cocktail.drinkIngredient1}</li>
          <li>{cocktail.drinkIngredient2}</li>
          <li>{cocktail.drinkIngredient3}</li>
          <li>{cocktail.drinkIngredient4}</li>
          <li>{cocktail.drinkIngredient5}</li>
          <li>{cocktail.drinkIngredient6}</li>
          <li>{cocktail.drinkIngredient7}</li>
          <li>{cocktail.drinkIngredient8}</li>
          <li>{cocktail.drinkIngredient9}</li>
          <li>{cocktail.drinkIngredient10}</li>
          <li>{cocktail.drinkIngredient11}</li>
          <li>{cocktail.drinkIngredient12}</li>
          <li>{cocktail.drinkIngredient13}</li>
          <li>{cocktail.drinkIngredient14}</li>
          <li>{cocktail.drinkIngredient15}</li>
        </ul>
        <ul className="measures">
          <li>{cocktail.drinkMeasure1}</li>
          <li>{cocktail.drinkMeasure2}</li>
          <li>{cocktail.drinkMeasure3}</li>
          <li>{cocktail.drinkMeasure4}</li>
          <li>{cocktail.drinkMeasure5}</li>
          <li>{cocktail.drinkMeasure6}</li>
          <li>{cocktail.drinkMeasure7}</li>
          <li>{cocktail.drinkMeasure8}</li>
          <li>{cocktail.drinkMeasure9}</li>
          <li>{cocktail.drinkMeasure10}</li>
          <li>{cocktail.drinkMeasure11}</li>
          <li>{cocktail.drinkMeasure12}</li>
          <li>{cocktail.drinkMeasure13}</li>
          <li>{cocktail.drinkMeasure14}</li>
          <li>{cocktail.drinkMeasure15}</li>
        </ul>
      </div>
    </div>
  );
}
Card.propTypes = {
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
export default Card;
