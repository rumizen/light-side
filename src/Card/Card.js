import React from "react";
import "../images/star.png";
import "../images/starfav.png";
import "./Card.scss";
import Snippet from "../Snippet/Snippet.js";

const Card = props => {
  const snippets = Object.keys(props).map(snippet => {
    return (
      <>
        {typeof props[snippet] === 'string' && (
          <Snippet category={snippet} text={props[snippet]} />
        )}
      </>
    );
  });

  return (
    <section className="card" id={Date.now()} key={Date.now()}>
      <h2>{props.name}</h2>
      {snippets}
      <div onClick={e => props.toggleFavorite(props.Name)}>
        {!props.isFav && (
          <img
            src={require("../images/star.png")}
            alt=""
            className="fav-icon"
          />
        )}
        {props.isFav && (
          <img
            src={require("../images/starfav.png")}
            alt=""
            className="fav-icon"
          />
        )}
      </div>
    </section>
  );
};

export default Card;
