import PropTypes from 'prop-types';
const Cart = (props) => {

    let totalQuantity = 0;
    for (const selectedProduct of props.cart) {
        console.log(selectedProduct);

        totalQuantity = totalQuantity + selectedProduct.quantity;    
    }
    

    return (
        <div>
            <h3 className="shop__order-title">Order Summary</h3>
            <p>Selected Items: {props.cart.length}</p>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: </p>
            <p>Shipping Charge: </p>
            <p>Tax: </p>
            <h5 className="shop__grand-total">Grand Total: </h5>
        </div>
    );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired, // adjust the prop type based on your actual requirements
};

export default Cart;