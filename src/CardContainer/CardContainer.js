import React from "react";
import "./CardContainer.scss";
import Card from '../Card/Card.js';

const CardContainer = props => {
  const allCards = props.category.map(thing => {
    const { name, gender, eye_color, height, birth_year } = thing;
    return (
      <Card
        name={name}
        gender={gender}
        eyeColor={eye_color}
        height={height}
        birthYear={birth_year}
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
