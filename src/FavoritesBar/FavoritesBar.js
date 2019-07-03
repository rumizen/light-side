import React from 'react';
import './FavoritesBar.scss';

const FavoritesBar = ({ faveCount }) => {
  return (
    <button className="favorites-bar">
      <h3>Favorites</h3>
      <p>{faveCount}</p>
    </button>
  );
};

export default FavoritesBar; 