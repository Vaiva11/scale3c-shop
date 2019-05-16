import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Shop, Cart } from './pages'
import { Header, Footer } from "./components";
import './index.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null
    }
  }

  componentDidMount() {
    fetch("https://boiling-reaches-93648.herokuapp.com/food-shop/products")
      .then(response => response.json())
      .then(json => {
        const products = json.map(product => ({
          ...product,
        }));
        this.setState({ products });
      })
      .catch(() =>
        this.setState({ error: "Something went wrong" })
      );

  }

  render() {
    const { products } = this.state;
    return (
      <div className="AppLayout">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
            <Shop products={products} />
          </main>
          <Footer />
        </Router >
      </div >
    )
  }
}

export default App;