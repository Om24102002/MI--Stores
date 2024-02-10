import React from 'react'
import "../styles/productReviewCard.css"

const productReviewCard = ({name,review,price,image,index}) => {
  return (
    <div className="productReviewCard">
        <img src={image} alt = {`${index} Review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default productReviewCard
