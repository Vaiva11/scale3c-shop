import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function ProductCard({
  image,
  name,
  price,
  currencySymbol,
  id,
  cartCount,
  updateCartCount
}) {

  return (
    <div className="Product-card">
      <div className="Product-card--image">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{`${price}${currencySymbol}`}</p>
        <span id="cartButton">
          🛒
          <input
            type="number"
            min={0}
            onChange={e => updateCartCount(id, e.target.value)}
            value={cartCount}
          />
        </span>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cartCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  updateCartCount: PropTypes.func.isRequired,
};

export default ProductCard;