import React from 'react';
import './index.scss';
import { ProductCartCard } from "../../components"
import { connect } from "react-redux";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null
    }
  }

  render() {
    const { products, updateCartCount } = this.props;

    const total = products.reduce((result, product) => {
      return result + product.price * product.cartCount;
    }, 0);

    const checkOut = total ?
      (<button type="button" className="Check-out"><h2>Check out</h2></button>) :
      (<div></div>)


    return (
      <ProductCartCard className="Line">
        <div className="Line--name">
          <p>Photo</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total product price</p>
          <p>Remove</p>
        </div>
        {products.map(({ id, name, price, cartCount, image }) => {
          return (
            <div key={id} className="Line--item">
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <p>{price}</p>
              <p>{cartCount}</p>
              <p>{cartCount * price}</p>
              <div className='Remove-product'>
                <button
                  type="button"
                  className='Remove-product--button'
                  onClick={e => this.props.updateCartCount(id, e.target.value--)}
                >
                  ❌
              </button>
              </div>
            </div>
          );
        })}
        <h2 className="Line-total">{`Total: ${total}`}</h2>
        <p>{checkOut}</p>
      </ProductCartCard>
    )
  }
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

function mapStateToProps(state) {
  return {
    products: state.products.filter(product => product.cartCount > 0),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
