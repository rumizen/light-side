import React from 'react';
import './Snippet.scss';

const Snippet = ({ category, text }) => {
  return (
    <article className="snippet">
      <h3>{category}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Snippet;