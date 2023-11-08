import { useState } from "react";
import PropTypes from "prop-types";
// import Card from "./Card";

function Searchbar({ ingredients }) {
  // passer les props
  const [ingredientsInput, setIngredientschInput] = useState("");

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="What are you looking for?"
        onInput={(event) => {
          setIngredientschInput(event.target.value);
        }}
      />
      <div>
        {ingredientsInput.toLowerCase() &&
          ingredients
            // eslint-disable-next-line react/prop-types
            .filter((ingredient) => {
              return ingredient.bottleName
                .toLowerCase()
                .includes(ingredientsInput.toLowerCase());
            })
            .map((ingredient) => {
              return <h1 key={ingredient.id}>{ingredient.bottleName}</h1>; // <Card/>
            })}
      </div>
    </div>
  );
}

Searchbar.propTypes = {
  ingredients: PropTypes.shape({
    id: PropTypes.number,
    bottleName: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    selected: PropTypes.bool,
    favorite: PropTypes.bool,
  }).isRequired,
};

export default Searchbar;

// .filter((preIngredient) => {
//   if (preIngredient.selected === true) {
//     preIngredient.map((ingredientFiltred) => {
//       return (
//         <h1 key={ingredientFiltred.id}>
//           {ingredientFiltred.bottleName}
//         </h1>
//       );
//     });
