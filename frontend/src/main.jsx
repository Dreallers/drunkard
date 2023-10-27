import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import Mybar from "./components/Mybar";
import Quizz from "./components/Quizz";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
