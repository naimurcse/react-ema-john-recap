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

export { addToDb, getShoppingCartFromDb };
