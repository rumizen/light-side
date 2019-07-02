import React from "react";
import "./NavBar.scss";
import CategoryBtn from '../CategoryBtn/CategoryBtn.js';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <CategoryBtn name="people" icon="👥" />
      <CategoryBtn name="planets" icon="🌍" />
      <CategoryBtn name="vehicles" icon="🚀" />
    </nav>
  );
};

export default NavBar;
