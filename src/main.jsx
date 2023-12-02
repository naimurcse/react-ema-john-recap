import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Inventory from "./components/Inventory/Inventory";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Shop />,
         },
         {
            path: "/home",
            element: <Shop />,
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
            path: "/contact",
            element: <Contact />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
