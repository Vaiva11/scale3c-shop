import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function ProductCartCard({ children, className }) {
  return <div className={`Products-list ${className}`}>{children}</div>;
}

ProductCartCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProductCartCard.defaultProps = {
  className: "",
};


export default ProductCartCard;