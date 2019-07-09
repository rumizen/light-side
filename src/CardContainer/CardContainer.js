import React from "react";
import "./CardContainer.scss";
import Card from "../Card/Card.js";
import PropTypes from "prop-types";

const CardContainer = props => {
  const allCards = props.category.map(thing => {
    return (
      <Card
        {...thing}
        updateFavorites={props.updateFavorites}
        toggleFavorite={props.toggleFavorite}
      />
    );
  });

  return (
    <main className="card-container">
      <>
        {props.category.length === 0 && <h2 className="no-fav-message">Choose some favorites bruh!</h2>}
        {allCards}
      </>
    </main>
  );
};

CardContainer.propTypes = {
  category: PropTypes.array.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default CardContainer;
