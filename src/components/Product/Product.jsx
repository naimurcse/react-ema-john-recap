
// import PropTypes from 'prop-types';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
    return (
        <div>
            <div className='product'>
                <div className="product__image">
                    <img src="" alt="" />
                </div>

                <div className="product__body">
                    <h3 className="product__title">Name</h3>
                    <p className='product__price'>Price: </p>
                    <p>Manufacturer: </p>
                    <p>Rating: </p>
                </div>

                <button className="btn btn-add-to-cart" >Add to Cart <FontAwesomeIcon icon={faCartShopping} /> </button>
            </div>
        </div>
    );
};

export default Product;