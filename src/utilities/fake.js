// Add to product to database
const addProductsToDatabase = (product) => {
   //    let shoppingCart = getShoppingCart();

   console.log(product);

   //    localStorage.setItem("cart", JSON.stringify(shoppingCart));
};

// Get Shopping Cart from database
const getShoppingCart = () => {
   let shoppingCart = {};
   const storedCart = localStorage.getItem("cart");
   if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
   }
   return shoppingCart;
};

export { getShoppingCart, addProductsToDatabase };
