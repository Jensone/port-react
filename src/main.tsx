import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "animate.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Création du router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
