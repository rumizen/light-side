import React from "react";
import "./CardContainer.scss";
import Card from '../Card/Card.js';

const CardContainer = props => {
  const allCards = props.category.map(thing => {
    return (
      <Card
        {...thing}
        updateFavorites={props.updateFavorites}
        updateFavorite={props.updateFavorite}
      />
    );
  });

  return (
    <main className="card-container">
      {allCards}
    </main>
  );
};

export default CardContainer;
