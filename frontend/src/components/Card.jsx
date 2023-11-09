import { useRouteLoaderData } from "react-router-dom";
import CardTwo from "./CardTwo";

function Card() {
  const cocktails = useRouteLoaderData("App");
  return (
    <div className="card">
      {cocktails.map((cocktail) => {
        return (
          <div key={cocktail.drinkId}>
            <CardTwo cocktail={cocktail} />
          </div>
        );
      })}
    </div>
  );
}
export default Card;
