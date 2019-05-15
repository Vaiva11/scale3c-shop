import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Shop, Cart } from './pages'
import { Header, Footer } from "./components";

function App() {
  return (
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

  )
}

export default App;