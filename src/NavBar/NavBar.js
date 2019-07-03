import React from "react";
import "./NavBar.scss";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/people" className="nav-btn">People</NavLink>
      <NavLink to="/vehicles" className="nav-btn">Vehicles</NavLink>
      <NavLink to="/planets" className="nav-btn">Planets</NavLink>
    </nav>
  );
};

export default NavBar;
