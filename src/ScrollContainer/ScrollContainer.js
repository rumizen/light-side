import React from 'react';
import './ScrollContainer.scss';

const ScrollContainer = ({ movie }) => {
  return (
    <section className="scroll-container">
      {movie}
    </section>
  )
}

export default ScrollContainer;