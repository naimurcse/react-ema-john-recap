import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product }) => {
   console.log(product);

   const { id, img, name, price, quantity } = product;

   return (
      <div className="review-item">
         <img src={img} alt="" />
         <div className="review-item__details">
            <div>
               <h3 className="review-item__title">{name}</h3>
               <p>
                  Price: <span>${price}</span>
               </p>
               <p>
                  Quantity: <span>{quantity}</span>
               </p>
            </div>
            <button className="delete-btn">
               <FontAwesomeIcon icon={faTrashCan} />
            </button>
         </div>
      </div>
   );
};

export default ReviewItem;
