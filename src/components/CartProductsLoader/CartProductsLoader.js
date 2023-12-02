import { useState } from "react";
import { getShoppingCartFromDb } from "../../utilities/fake";

const cartProductsLoader = async () => {
   const loadedProducts = await fetch(`products.json`);
   const products = await loadedProducts.json();

   const storedCart = getShoppingCartFromDb();
   console.log(storedCart);
   const savedCart = [];
   for (const id in storedCart) {
      let addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
         addedProduct.quantity = storedCart[id];
         savedCart.push(addedProduct);
      }
   }
   console.log(savedCart);
   //    const [cart, setCart] = useState([]);
   return savedCart;
};

export default cartProductsLoader;
