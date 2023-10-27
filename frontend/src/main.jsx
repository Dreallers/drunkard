import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";

import App from "./App";
import Mybar from "./components/Mybar";
import Quiz from "./components/Quiz";
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
    element: (
      <div>
        <Mybar />
      </div>
    ),
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
