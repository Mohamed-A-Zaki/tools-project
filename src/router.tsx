import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Youtube from "./pages/Youtube/Youtube";
import Technologies from "./pages/Technologies/Technologies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Technologies />,
      },
      {
        path: "youtube",
        element: <Youtube />,
      },
    ],
  },
]);
