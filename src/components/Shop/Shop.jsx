import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { useDeferredValue, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getShoppingCartFromDb } from "../../utilities/fake";

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

   useEffect(() => {
      fetch("products.json")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   useEffect(() => {
      const storedCart = getShoppingCartFromDb();
      const savedCart = [];

      for (const id in storedCart) {
         //  console.log(id);
         //  console.log(storedCart[id]);
         let addedProduct = products.find((pd) => pd.id === id);
         if (addedProduct) {
            let quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
         }

         // let quantity =
      }
      setCart(savedCart);
   }, [products]);

   const handleAddToCart = (product) => {
      // console.log(product);
      let newCart = [];
      const savedProduct = cart.find((pd) => pd.id === product.id);
      if (!savedProduct) {
         product.quantity = 1;
         newCart = [...cart, product];
      } else {
         product.quantity += 1;
         const remainingProducts = cart.filter((pd) => pd.id !== product.id);
         newCart = [...remainingProducts, product];
      }

      // let newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id);
   };

   const deleteShoppingCartHandler = () => {
      setCart([]);
      //   console.log("Hello From Shop");
   };

   return (
      <div>
         <section className="shop">
            <div className="shop__products">
               {products.map((product) => (
                  <Product
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                  ></Product>
               ))}
            </div>
            <div className="shop__order-summary">
               <Cart cart={cart} deleteShoppingCartHandler={deleteShoppingCartHandler}>
                  <Link to="/orders">
                     <button>Review Order</button>
                  </Link>
               </Cart>
               {
                  // console.log(cart, cart.length)
               }
            </div>
         </section>
      </div>
   );
};

export default Shop;
