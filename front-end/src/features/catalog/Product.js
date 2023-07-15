import React from 'react'

const Product = (props) => {
    const {name, description, price, img} = props.product
  
    return (
  <>
   <li>
    <div class="product-row-item">
      <span class="item-row-1">
        <img src={img} />
      </span>
      <span class="product-text">
      <span class="item-row-2">
        <h2>{name}</h2>
        <img src="assets/imgs/heart.png" alt="like" />
      </span>
      <span class="greyed-out">
        <p>{description}</p>
      </span>
      <span>
        <p>${price}</p>
      </span>
      </span>
    </div>
  </li>
  </>
  )
}

export default Product
