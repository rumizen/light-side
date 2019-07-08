import React from "react";
import FavoritesBar from '../FavoritesBar/FavoritesBar'
import "./NavBar.scss";
import { NavLink } from 'react-router-dom';

const NavBar = ({ faveCount }) => {
  return (
    <nav className="nav-bar">
      <FavoritesBar faveCount={faveCount} className="nav-btn" />
      <NavLink to="/people" className="hvr-grow nav-btn">
        <h3>People</h3>
      </NavLink>
      <NavLink to="/vehicles" className="hvr-grow nav-btn">
        <h3>Vehicles</h3>
      </NavLink>
      <NavLink to="/planets" className="hvr-grow nav-btn">
        <h3>Planets</h3>
      </NavLink>
    </nav>
  );
};

export default NavBar;
