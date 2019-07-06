import React from "react";
import "./CardContainer.scss";
import Card from "../Card/Card.js";

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
        {props.category.length === 0 && <h2>Choose some favorites bruh!</h2>}
        {allCards}
      </>
    </main>
  );
};

export default CardContainer;
