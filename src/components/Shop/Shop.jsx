import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { useEffect } from "react";

const Shop = () => {

    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])

    const handleAddToCart = (id) => {
        console.log(id);
    }

    return (
        <section className="shop">
            <div className="shop__products">
            
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
                
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