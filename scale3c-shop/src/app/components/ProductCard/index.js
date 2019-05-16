import React from "react";
import "./index.scss";

function ProductCard({
  image,
  name,
  price,
  currencySymbol,
  id
}) {
  return (
    <div className="Product-card">
      <div className="Product-card--image">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{`${price}${currencySymbol}`}</p>
        <span id="cartButton">
          <button type="button" onClick={() => console.log("Add to cart", id)}>🛒</button>
          <p>count</p>
        </span>
      </div>
    </div>
  )
}

export default ProductCard;