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

export default App;
