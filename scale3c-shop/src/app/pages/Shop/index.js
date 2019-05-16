import React from 'react';
import PropTypes from "prop-types";
import './index.scss';
import { ProductCard } from "../../components";

function Shop({ products }) {
  return (
    <div className="Products-list">
      <h1>SHOP</h1>
      {products.map(product => (
        <ProductCard
          {...product}
        />
      ))}
    </div>
  )
}
Shop.defaultProps = {
  products: [],
};

export default Shop;