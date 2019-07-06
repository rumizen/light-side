import React from 'react';
import { NavLink } from "react-router-dom";
import '../NavBar/NavBar.scss'
import './FavoritesBar.scss';

const FavoritesBar = ({ faveCount }) => {
  return (
    <NavLink to='/favorites' className="nav-btn favorites-bar">
      <h3>Favorites</h3>
      <p>{faveCount}</p>
    </NavLink>
  );
};

export default FavoritesBar; 