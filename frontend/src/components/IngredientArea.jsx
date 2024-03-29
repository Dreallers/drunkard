import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function IngredientCard({ setIngredients, ingredients, table }) {
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

  let statusBtn = true;

  function handleShowIng() {
    const ingredientID = document.getElementById("ingredientID");
    const cardAreaID = document.getElementById("cardAreaID");
    // const carteContainerID = document.getElementById("carteContainerID");
    // const sideBtn = document.getElementById("sideBtn");
    statusBtn = !statusBtn;
    // console.log(statusBtn);

    if (!statusBtn) {
      // carteContainerID.classList.remove("noblur");
      // carteContainerID.classList.add("blurside");

      cardAreaID.classList.remove("noblur");
      cardAreaID.classList.add("blurside");

      ingredientID.classList.remove("hide");
      ingredientID.classList.add("show");

      // sideBtn.classList.remove("sideIng");
      // sideBtn.classList.add("middleIng");
    } else {
      // carteContainerID.classList.remove("blurside");
      // carteContainerID.classList.add("noblur");

      cardAreaID.classList.remove("blurside");
      cardAreaID.classList.add("noblur");

      ingredientID.classList.remove("show");
      ingredientID.classList.add("hide");

      // sideBtn.classList.remove("middleIng");
      // sideBtn.classList.add("sideIng");
    }
  }

  return (
    <div className="toptoptop">
      {/* ref={reftop} */}
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
            <button
              className="generated-btn"
              type="button"
              onClick={() => setIngredients(table)}
            >
              <img src="/icone-x-avec-cercle-gris.png" alt="cancel-cross" />
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
            .sort((a, b) => (a.bottleName > b.bottleName ? 1 : -1))
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
                        ingredient[selector] === true
                          ? "Selected"
                          : "NotSelected"
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
        <div
          id="sideBtn"
          type="button"
          // style={{ left: `${righttoptoptop}px` }}
          // style={{ left: "50vw" }}
          role="presentation"
          className="sideIng"
          onClick={handleShowIng}
        >
          <p>I</p>
          <p>n</p>
          <p>g</p>
          <p>r</p>
          <p>e</p>
          <p>d</p>
          <p>i</p>
          <p>e</p>
          <p>n</p>
          <p>t</p>
          <p>s</p>
        </div>
      </div>
      <div className="BlueNeon" />
    </div>
  );
}

IngredientCard.propTypes = {
  table: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      bottleName: PropTypes.string,
      type: PropTypes.string,
      image: PropTypes.string,
      selected: PropTypes.bool,
      favorite: PropTypes.bool,
    })
  ).isRequired,
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
