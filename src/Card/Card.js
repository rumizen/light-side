import React from "react";
import "../images/star.png";
import "../images/starfav.png";
import "./Card.scss";
import Snippet from "../Snippet/Snippet.js";
import PropTypes from "prop-types";

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
      {snippets}
      <div className="fav-div" onClick={e => props.toggleFavorite(props.Name)}>
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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default Card;
