import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./conmponents/Home";
import ErrorPage from "./conmponents/Errorpage";
import Login from "./conmponents/Login";
import Blogs from "./conmponents/Blogs";
import Register from "./conmponents/Register";
import Context from "./providers/Context";
import Mytoys from "./conmponents/Mytoys";
import AddToys from "./conmponents/AddToys";
import AllToys from "./conmponents/AllToys";
import PrivateRoutes from "./priveteroutes/PrivateRoutes";
import SingleToy from "./conmponents/SingleToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoutes>
            <Mytoys />
          </PrivateRoutes>
        ),
      },
      {
        path: "addtoys",
        element: (
          <PrivateRoutes>
            <AddToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "singletoy/:id",
        element: (
          <PrivateRoutes>
            <SingleToy />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-trove-server.vercel.app/alltoys/${params.id}`),
      },
      {
        path: "alltoys",
        element: <AllToys />,
        // loader: () => fetch("https://toys-trove-server.vercel.app/alltoys"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
