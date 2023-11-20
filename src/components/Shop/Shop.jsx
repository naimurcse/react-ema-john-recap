import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
    return (
        <div>
            <section className="shop">
                <div className="shop__products">
                    <Product></Product>
                </div>
                <div className="shop__order-summary">
                    <Cart></Cart>
                </div>
            </section>
        </div>
    );
};

export default Shop;