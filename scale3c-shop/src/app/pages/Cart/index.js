import React from 'react';
import './index.scss';
import { ProductCartCard } from "../../components"
import { connect } from "react-redux";;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null
    }
  }

  render() {

    const { products } = this.state;

    const total = products.reduce((result, product) => {
      return result + product.price * product.cartCount;
    }, 0);

    return (
      <ProductCartCard className="line">
        {products.map(({ id, name, price, cartCount, image }) => {
          return (
            <div key={id} className="line-item">
              <div>
                <img src={image} alt={name} />
                <span>{name}</span>
              </div>
              <div>{price}</div>
              <div>{cartCount}</div>
              <div>{cartCount * price}</div>
            </div>
          );
        })}
        <div className="Line-total">{`Total: ${total}`}</div>
      </ProductCartCard>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     products: state.products.filter(product => product.cartCount > 0),
//   };
// }

function mapStateToProps(state) {
  return {
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch({ type: "FETCH_PRODUCTS" }),
    getProductsSuccess: payload =>
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload }),
    getProductsFailure: payload =>
      dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload }),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

