import React from 'react';
import { connect } from "react-redux";
import './index.scss';
import { ProductCard, Popup } from "../../components";


class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null
    }
  }

  render() {
    const { products, updateCartCount } = this.props;
    return (

      <div className="Products-list" >
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              updateCartCount={updateCartCount}
            />

          ))
        }
        <Popup></Popup>
      </div>
    )
  }
}

Shop.defaultProps = {
  products: []
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCartCount: (id, count) =>
      dispatch({
        type: "UPDATE_PRODUCT_CART_COUNT",
        payload: { id, count },
      }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
