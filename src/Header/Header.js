import React from 'react';
import './Header.scss';
import NavBar from "../NavBar/NavBar.js";
import PropTypes from "prop-types";

const Header = ({ faveCount }) => {
  return (
    <header className="header">
      <h1>Dark Side</h1>
      <NavBar faveCount={faveCount} />   
    </header>
  );
};

Header.propTypes = {
  faveCount: PropTypes.number.isRequired
}

export default Header;