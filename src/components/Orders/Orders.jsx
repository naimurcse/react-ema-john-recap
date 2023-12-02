import { useState } from "react";
import { getShoppingCartFromDb } from "../../utilities/fake";
import Cart from "../Cart/Cart";
import "./Order.css";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
   const cart = useLoaderData();
   console.log(cart);
   return (
      <div className="container order-cols">
         <div className="order-items">
            <h3>Total Items: {cart.length}</h3>
            {cart.map((product) => (
               <ReviewItem key={product.id} product={product}></ReviewItem>
            ))}
         </div>
         <div>
            <div className="order-cart">
               <Cart cart={cart}></Cart>
            </div>
         </div>
      </div>
   );
};

export default Orders;
