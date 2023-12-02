import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Layout/Home.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
      children: [
         {
            path: "/",
            element: <Shop />,
         },
         {
            path: "/orders",
            element: <Orders />,
         },
         {
            path: "/shop",
            element: <Shop />,
         },
         {
            path: "/inventory",
            element: <Inventory />,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
