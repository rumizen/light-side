import React from 'react';
import './Header.scss';
import FavoritesBar from '../FavoritesBar/FavoritesBar.js';
import NavBar from "../NavBar/NavBar.js";

const Header = ({ faveCount }) => {
  return (
    <header className="header">
      <h1>Dark Side</h1>
      <NavBar faveCount={faveCount} />   
    </header>
  );
};

export default Header;