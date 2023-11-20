import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { useDeferredValue, useEffect, useState } from "react";

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div>
            <section className="shop">
                <div className="shop__products">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                    
                </div>
                <div className="shop__order-summary">
                    <Cart></Cart>
                </div>
            </section>
        </div>
    );
};

export default Shop;