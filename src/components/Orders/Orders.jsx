import { useState } from "react";
import { getShoppingCartFromDb } from "../../utilities/fake";
import Cart from "../Cart/Cart";
import "./Order.css";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
   const cart = useLoaderData();
   console.log(cart);
   return (
      <div className="container order-cols">
         <div className="">
            <p>List: {cart.length}</p>
         </div>
         <div className="">
            <h2>Order Summary</h2>
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Orders;
