import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      Header
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart</Link>
    </header>
  )
}

export default Header;