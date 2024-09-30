import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Youtube from "./pages/Youtube/Youtube";
import Technologies from "./pages/Technologies/Technologies";
import Others from "./pages/Others/Others";
import Work from "./pages/Work/Work";
import YoutubeWeb from "./pages/YoutubeWeb/YoutubeWeb";
import Tools from "./pages/Tools/Ai";

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
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "youtube",
        element: <Youtube />,
      },
      {
        path: "youtube-web",
        element: <YoutubeWeb />,
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
