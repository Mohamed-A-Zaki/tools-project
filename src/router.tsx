import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Others from "./pages/Others/Others";
import Work from "./pages/Work/Work";
import Tools from "./pages/Tools/Ai";
import Programming from "./pages/Programming/Programming";
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";
import React from "./pages/React/React";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <React />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "programming",
        element: <Programming />,
      },
      {
        path: "web-development",
        element: <WebDevelopment />,
      },
      {
        path: "others",
        element: <Others />,
      },
      {
        path: "work",
        element: <Work />,
      },
    ],
  },
]);
