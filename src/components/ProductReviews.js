import React from 'react'
import ProductReviewCard from "./productReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className="productReviews">
        {productReviews.map((item,index)=>(
            <ProductReviewCard key = {item.image} price={item.price} image = {item.image} name={item.name} review = {item.review} index={index}/>
        ))}
    </div>
  )
}

export default ProductReviews
