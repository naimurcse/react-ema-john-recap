import PropTypes from 'prop-types';

const Cart = (props) => {
    
    

    let totalPrice = 0;
    let totalQuantity = 0;
    let totalShipping = 0;
    for (const product of props.cart) {
        let productPrice = product.price;
        totalPrice += productPrice * product.quantity;
        totalQuantity += product.quantity;
        totalShipping += product.shipping;
    }

    const tax = totalPrice * 15 / 100;
    const grandTotal = totalPrice + tax + totalShipping;
    return (
        <div>
            <h3 className="shop__order-title">Order Summary</h3>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h5 className="shop__grand-total">Grand Total: {grandTotal}</h5>
        </div>
    );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired, // Adjust the prop type as needed
};

export default Cart;