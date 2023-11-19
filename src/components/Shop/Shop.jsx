import "./Shop.css";
const Shop = () => {
    return (
        <section className="shop">
            <div className="shop__products">
                <h1>PRODUCT</h1>
            </div>
            <div className="shop__order-summary">
                <h3 className="shop__order-title">Order Summary</h3>
                <p>Selected Items: 6</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h5 className="shop__grand-total">Grand Total: $1559</h5>
            </div>
        </section>
    );
};

export default Shop;