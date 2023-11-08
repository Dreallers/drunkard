import { useLocation, Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Card from "./components/Card";

function App() {
  const location = useLocation();
  return (
    <div className="global">
      {location.pathname !== "/" && (
        <div>
          <Navbar />
        </div>
      )}
      <div>
        <Outlet />
      </div>
      {/* <div className="App">
        <button type="button" onClick={getCocktail}>
          Load Coktails
        </button>
      </div>
      {FinalCocktailTable.map((cocktail) => {
        return <Card cocktail={cocktail} key={cocktail.drinkId} />;
      })} */}

      <div className="flexgrow1" />
      {location.pathname !== "/" && (
        <div className="footer">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
