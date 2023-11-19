import PropTypes from 'prop-types';

const Cart = (props) => {
    
    return (
        <div>
            <h3 className="shop__order-title">Order Summary</h3>
            <p>Selected Items: {props.cart.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h5 className="shop__grand-total">Grand Total: $1559</h5>
        </div>
    );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired, // Adjust the prop type as needed
};

export default Cart;