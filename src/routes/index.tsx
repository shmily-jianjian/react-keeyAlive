import { lazy } from "react";
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";
import List from "@/pages/List";
import Layouts from "@/pages/Layouts";

import { Navigate, RouteObject } from "react-router-dom";

// const Home = lazy(() => import("@/pages/Home"));
// const Detail = lazy(() => import("@/pages/Detail"));
// const List = lazy(() => import("@/pages/List"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
];

export default routes;
