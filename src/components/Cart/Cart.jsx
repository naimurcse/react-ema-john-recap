import React from 'react';

const Cart = () => {
    return (
        <div>
            <h3 className="shop__order-title">Order Summary</h3>
            <p>Selected Items: </p>
            <p>Total Price: </p>
            <p>Shipping Charge: </p>
            <p>Tax: </p>
            <h5 className="shop__grand-total">Grand Total: </h5>
        </div>
    );
};

export default Cart;