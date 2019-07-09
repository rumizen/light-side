import React from 'react';
import './Snippet.scss';
import PropTypes from "prop-types";

const Snippet = ({ category, text }) => {
  return (
    <article className="snippet" id={Date.now()} key={Date.now()}>
      <h3>{category}</h3>
      <p>{text}</p>
    </article>
  );
};

Snippet.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Snippet;