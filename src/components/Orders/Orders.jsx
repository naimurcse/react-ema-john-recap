import { useState } from "react";
import { getShoppingCartFromDb } from "../../utilities/fake";
import Cart from "../Cart/Cart";
import "./Order.css";
import { useLoaderData } from "react-router-dom";
const Orders = () => {
   const savedCart = getShoppingCartFromDb();
   console.log(savedCart);
   const [cart, setCart] = useState([]);

   const products = useLoaderData();
   const savedProduct = [];
   for (const id in savedCart) {
      let addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
         addedProduct.quantity = savedCart[id];
         savedProduct.push(addedProduct);
      }
   }
   console.log(savedProduct);

   return (
      <div className="container order-cols">
         <div className="">
            <p>List</p>
         </div>
         <div className="">
            <h2>Order Summary</h2>
            <Cart cart={[]}></Cart>
         </div>
      </div>
   );
};

export default Orders;
