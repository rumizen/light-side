import React from 'react';
import "react-star-wars-crawl/lib/index.css";
import './ScrollContainer.scss';
import PropTypes from "prop-types";

const ScrollContainer = ({ movie }) => {
  return (
      <section className="fade">
        <article className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>{`Episode ${movie.episode_id}`}</p>
              <h1>{movie.title}</h1>
            </div>
            <p>{movie.opening_crawl}</p>
          </div>
        </article>
      </section>
  );
};

ScrollContainer.propTypes = {
  movie: PropTypes.object.isRequired
}

export default ScrollContainer;