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


import React from 'react';
import PropTypes from 'prop-types';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
    return (
        <div className='product'>
            <div className="product__image">
                <img src="" alt="" />
            </div>
            
            <div className="product__body">
                <h3 className="product__title">Hello Product</h3>
                <p className='product__price'>Price: </p>
                <p>Manufacturer: </p>
                <p>Rating: </p>
            </div>

            <button className="btn btn-add-to-cart">Add to Cart</button>
        </div>
    );
};

Product.propTypes = {
  product: PropTypes.object.isRequired, // Adjust the prop type as needed
};

export default Product;