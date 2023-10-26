import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import Mybar from "./components/Mybar";
import Quizz from "./components/Quizz";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Homepage />
        <NavLink to="/home">Accéder au site</NavLink>
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/mybar",
    element: <Mybar />,
  },
  {
    path: "/quizz",
    element: <Quizz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
