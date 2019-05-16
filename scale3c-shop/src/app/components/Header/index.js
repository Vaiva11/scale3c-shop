import React from 'react';
import "./index.scss";
import {
  FaLemon
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <ul className='header__icon'>
        <li>
          <FaLemon />
        </li>
      </ul>
      <ul className='header__nav'>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;