import PropTypes from "prop-types";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
const Cart = (props) => {
   console.log(props);
   const deleteShoppingCartHandler = props.deleteShoppingCartHandler;
   const children = props.children;
   let totalQuantity = 0;
   let totalPrice = 0;
   let totalShipping = 0;
   for (const selectedProduct of props.cart) {
      // console.log(selectedProduct);

      totalQuantity = totalQuantity + selectedProduct.quantity;
      totalPrice = totalPrice + selectedProduct.price * selectedProduct.quantity;
      totalShipping = totalShipping + selectedProduct.shipping * selectedProduct.quantity;
   }
   const totalTax = (totalPrice * 15) / 100;
   const grandTotal = totalPrice + totalShipping + totalTax;

   return (
      <div className="shop__cart">
         <h3 className="shop__order-title">Order Summary</h3>
         <p>Selected Items: {props.cart.length}</p>
         <p>Total Quantity: {totalQuantity}</p>
         <p>Total Price: ${totalPrice}</p>
         <p>Shipping Charge: ${totalShipping} </p>
         <p>Tax: ${totalTax.toFixed(2)}</p>
         <h5 className="shop__grand-total">Grand Total: ${grandTotal.toFixed(2)} </h5>

         <div className="btn-section">
            <button className="btn btn-danger btn-flex" onClick={deleteShoppingCartHandler}>
               <span>Clear Cart</span>
               <FontAwesomeIcon icon={faTrashCan} />
            </button>
            {children}
         </div>
      </div>
   );
};

Cart.propTypes = {
   cart: PropTypes.array.isRequired, // adjust the prop type based on your actual requirements
   deleteShoppingCartHandler: PropTypes.func.isRequired, // adjust the prop type based on your actual requirements
};

export default Cart;
