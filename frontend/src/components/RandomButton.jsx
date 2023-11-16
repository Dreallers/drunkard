import PropTypes from "prop-types";
import { useState } from "react";

function Hovering() {
  return <div className="is-hovering">Surprise me!</div>;
}
function RandomButton({ buttonRandomClickHandler }) {
  // const cocktails = useRouteLoaderData("App");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="random ">
      {isHovering && <Hovering />}
      <button
        className="random-button"
        type="button"
        onClick={() => buttonRandomClickHandler("test")}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={() => undefined}
        onBlur={() => undefined}
      >
        <img src="/dice neon crop png.png" alt=" cocktail random button" />
      </button>
    </div>
  );
}

export default RandomButton;

RandomButton.propTypes = {
  buttonRandomClickHandler: PropTypes.func.isRequired,
};
