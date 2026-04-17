import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import FriendDetails from "./Pages/FriendDetails";
import TimeLine from "./Pages/TimeLine";
import ErrorPage from "./Pages/ErrorPage";
import { TimelineProvider } from "./Context/TimelineContext";
import Stats from "./Pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
        loader: () => fetch("/FriendsData.json"),
      },

      {
        path: "/stats",
        element: <Stats/>,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <div>
      <TimelineProvider>
        <RouterProvider router={router} />
      </TimelineProvider>
    </div>
  );
};

export default App;
