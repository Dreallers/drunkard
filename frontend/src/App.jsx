import { useLocation, Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      {location.pathname !== "/" && (
        <div className="footer">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
