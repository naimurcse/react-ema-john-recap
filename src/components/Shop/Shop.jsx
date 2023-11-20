import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { useDeferredValue, useEffect, useState } from "react";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        // console.log(product);
        let newCart = [];
        const savedProduct = cart.find(pd => pd.id === product.id);
        if (!savedProduct) {
            product.quantity = 1;
            newCart = [...cart, product];

        } else {
            product.quantity += 1;
            const remainingProducts = cart.filter(pd => pd.id !== product.id);
            newCart = [...remainingProducts, product];
        }

        // let newCart = [...cart, product];
        setCart(newCart);

        // console.log(product);
        // console.log(savedProduct);
        console.log(newCart);
    }

    return (
        <div>
            <section className="shop">
                <div className="shop__products">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                    
                </div>
                <div className="shop__order-summary">
                    <Cart cart={cart}></Cart>
                    {
                        console.log(cart, cart.length)
                    }
                </div>
            </section>
        </div>
    );
};

export default Shop;