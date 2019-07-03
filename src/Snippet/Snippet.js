import React from 'react';
import './Snippet.scss';

const Snippet = ({ category, text }) => {
  return (
    <article className="snippet" id={Date.now()} key={Date.now()}>
      <h3>{category}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Snippet;