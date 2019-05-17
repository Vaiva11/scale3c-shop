import React from 'react';
import { connect } from "react-redux";
import './index.scss';
import { ProductCard } from "../../components";


class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null
    }
  }

  componentDidMount() {
    const { getProducts, getProductsSuccess, getProductsFailure } = this.props;

    getProducts();
    fetch("https://boiling-reaches-93648.herokuapp.com/food-shop/products")
      .then(response => response.json())
      .then(json => {
        const products = json.map(product => ({
          cartCount: 0,
        }));

        getProductsSuccess(products);
      })
      .catch(() => getProductsFailure("Something went wrong"));
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
    getProducts: () => dispatch({ type: "FETCH_PRODUCTS" }),
    getProductsSuccess: payload =>
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload }),
    getProductsFailure: payload =>
      dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload }),
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
