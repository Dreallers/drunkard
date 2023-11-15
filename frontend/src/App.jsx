import React, { useState, useMemo } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OutletContext from "./components/OutletContext";

function App() {
  const location = useLocation();
  const [favoriteTable, setfavoriteTable] = useState([]);

  const contextValue = useMemo(
    () => ({ favoriteTable, setfavoriteTable }),
    [favoriteTable, setfavoriteTable]
  );

  return (
    <div className="global">
      {location.pathname !== "/" && (
        <div>
          <Navbar />
        </div>
      )}
      <OutletContext.Provider value={contextValue}>
        <div>
          <Outlet />
        </div>
      </OutletContext.Provider>
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
