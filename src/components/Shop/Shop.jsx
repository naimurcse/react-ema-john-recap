import { useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { useEffect } from "react";
import { getShoppingCart,addProductsToDatabase } from "../../utilities/fake";
import Cart from "../Cart/Cart";

const Shop = () => {

    const [products,setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])


    const handleAddToCart = (product) => {
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id);
        if (exist) {
            exist.quantity = exist.quantity + 1;
            const remainingProduct = cart.filter(pd => pd.id !== product.id);
            newCart = [...remainingProduct, exist];
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
    }

    console.log(cart);
    


    return (
        <section className="shop">
            <div className="shop__products">
            
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="shop__order-summary">
                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default Shop;