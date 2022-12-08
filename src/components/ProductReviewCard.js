import React from "react";
import '../styles/ProductReviewsCard.css'
const ProductReviewCard = ({ name, price, index, image, review }) => {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`${index} review`} price={price} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
      {/* <h5>{}</h5> */}
    </div>
  );
};

export default ProductReviewCard;
