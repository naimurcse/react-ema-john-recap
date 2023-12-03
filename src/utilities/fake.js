// To add to database
const addToDb = (id) => {
   let shoppingCart = getShoppingCartFromDb();

   let quantity = shoppingCart[id];
   if (id in shoppingCart) {
      shoppingCart[id] = quantity + 1;
   } else {
      shoppingCart[id] = 1;
   }

   localStorage.setItem("cart", JSON.stringify(shoppingCart));
};

// To get shoppingCart
const getShoppingCartFromDb = () => {
   let shoppingCart = {};

   let storedCart = localStorage.getItem("cart");
   if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
   }

   return shoppingCart;
};

// To remove item from local storage
const removeItemFromDb = (id) => {
   let shoppingCart = getShoppingCartFromDb();
   if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
   }
};

// To remove shoppingCart from database
const deleteShoppingCart = () => {
   localStorage.removeItem("cart");
};

export { addToDb, getShoppingCartFromDb, removeItemFromDb, deleteShoppingCart };
