import PropTypes from 'prop-types';
const Cart = (props) => {

    let totalQuantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const selectedProduct of props.cart) {
        console.log(selectedProduct);

        totalQuantity = totalQuantity + selectedProduct.quantity;
        totalPrice = totalPrice + (selectedProduct.price * selectedProduct.quantity);
        totalShipping = totalShipping + (selectedProduct.shipping * selectedProduct.quantity);
    }
    const totalTax = totalPrice * 15 / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div>
            <h3 className="shop__order-title">Order Summary</h3>
            <p>Selected Items: {props.cart.length}</p>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping Charge: ${totalShipping} </p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h5 className="shop__grand-total">Grand Total: ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired, // adjust the prop type based on your actual requirements
};

export default Cart;