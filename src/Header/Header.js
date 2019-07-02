import React from 'react';
import './Header.scss';
import FavoritesBar from '../FavoritesBar/FavoritesBar.js';
import NavBar from "../NavBar/NavBar.js";

const Header = () => {
  return (
    <header className="header">
      <h1>Dark Side</h1>
      <FavoritesBar />
      <NavBar />
    </header>
  );
};

export default Header;