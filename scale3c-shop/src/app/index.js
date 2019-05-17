import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { Shop, Cart } from './pages'
import { Header, Footer } from "./components";
import './index.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allow: true,
    };
  }

  componentDidMount() {
    const { getProducts, getProductsSuccess, getProductsFailure } = this.props;

    getProducts();
    fetch("https://boiling-reaches-93648.herokuapp.com/food-shop/products")
      .then(response => response.json())
      .then(json => {
        const products = json.map(product => ({
          ...product,
          isFavorite: false,
          cartCount: 0,
        }));

        getProductsSuccess(products);
      })
      .catch(() => getProductsFailure("Something went wrong"));
  }


  render() {
    return (
      <div className="AppLayout">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </main>
          <Footer />
        </Router >
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
    loading: state.loading,
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
)(App);
