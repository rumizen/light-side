import React from "react";
import FavoritesBar from '../FavoritesBar/FavoritesBar'
import "./NavBar.scss";
import { NavLink } from 'react-router-dom';

const NavBar = ({ faveCount }) => {
  return (
    <nav className="nav-bar">
      <FavoritesBar faveCount={faveCount} className="nav-btn" />
      <NavLink to="/people" className="nav-btn">
        <h3>People</h3>
      </NavLink>
      <NavLink to="/vehicles" className="nav-btn">
        <h3>Vehicles</h3>
      </NavLink>
      <NavLink to="/planets" className="nav-btn">
        <h3>Planets</h3>
      </NavLink>
    </nav>
  );
};

export default NavBar;
