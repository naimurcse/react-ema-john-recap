import { useState } from "react";
import { deleteShoppingCart, getShoppingCartFromDb, removeItemFromDb } from "../../utilities/fake";
import Cart from "../Cart/Cart";
import "./Order.css";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
   const loadedCart = useLoaderData();
   // console.log(loadedCart);
   const [cart, setCart] = useState(loadedCart);

   const removeItemHandler = (id) => {
      let remainProducts = cart.filter((product) => product.id !== id);
      setCart(remainProducts);
      // console.log(remainProducts);
      removeItemFromDb(id);
   };

   const deleteShoppingCartHandler = () => {
      setCart([]);
      deleteShoppingCart();
      // console.log("Hello From Orders");
   };

   return (
      <div className="container order-cols">
         <div className="order-items">
            <h3>Total Items: {cart.length}</h3>
            {cart.map((product) => (
               <ReviewItem
                  key={product.id}
                  product={product}
                  removeItemHandler={removeItemHandler}
               ></ReviewItem>
            ))}
         </div>
         <div>
            <div className="order-cart">
               <Cart cart={cart} deleteShoppingCartHandler={deleteShoppingCartHandler}>
                  <div>Proceed Checkout</div>
               </Cart>
            </div>
         </div>
      </div>
   );
};

export default Orders;
