import React from 'react';
import { NavLink } from "react-router-dom";

import './FavoritesBar.scss';

const FavoritesBar = ({ faveCount }) => {
  return (
    <NavLink to='/favorites' className="favorites-bar">
      <h3>Favorites</h3>
      <p>{faveCount}</p>
    </NavLink>
  );
};

export default FavoritesBar; 