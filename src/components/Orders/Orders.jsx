import { getShoppingCartFromDb } from "../../utilities/fake";
import Cart from "../Cart/Cart";
import "./Order.css";
import { useLoaderData } from "react-router-dom";
const Orders = () => {
   const savedCart = getShoppingCartFromDb();
   console.log(savedCart);

   const products = useLoaderData();
   console.log(products);

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
