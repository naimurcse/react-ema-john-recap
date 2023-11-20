
// import PropTypes from 'prop-types';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const Product = (props) => {
    console.log(props.product);
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <div className="product__image">
                <img src={img} alt="" />
            </div>

            <div className="product__body">
                <h3 className="product__title">{name}</h3>
                <p className='product__price'>Price: {[price]}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>

            <button className="btn btn-add-to-cart" >Add to Cart <FontAwesomeIcon icon={faCartShopping} /> </button>
        </div>
    );
};

Product.propTypes = {
  product: PropTypes.object.isRequired, // adjust the prop type based on your actual requirements
};

export default Product;