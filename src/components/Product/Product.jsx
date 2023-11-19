// import "./Product.css";
// const Product = (props) => {
//     console.log(props.product);
//     return (
//         <div>
//             <h1>PRODUCT</h1>
//         </div>
//     );
// };

// export default Product;


import PropTypes from 'prop-types';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {id, img, name, price, quantity, ratings, seller, shipping } = props.product;
    
    const handleAddToCart = props.handleAddToCart;
    // console.log(handleAddToCart);
    return (
        <div className='product'>
            <div className="product__image">
                <img src={img} alt="" />
            </div>

            <div className="product__body">
                <h3 className="product__title">{name}</h3>
                <p className='product__price'>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>

            <button className="btn btn-add-to-cart" onClick={()=>handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /> </button>
        </div>
    );
};

Product.propTypes = {
  product: PropTypes.object.isRequired, // Adjust the prop type as needed
  handleAddToCart: PropTypes.func.isRequired, // Adjust the prop type as needed
};

export default Product;