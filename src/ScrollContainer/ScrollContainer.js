import React from 'react';
import "react-star-wars-crawl/lib/index.css";
import './ScrollContainer.scss';
import Crawl from "react-star-wars-crawl";
import PropTypes from "prop-types";

const ScrollContainer = ({ movie }) => {
  return (
    <Crawl
      className="scroll-container"
      title={`Episode ${movie.episode_id}`}
      subTitle={movie.title}
      text={movie.opening_crawl}
      height="20%"
    />
  );
};

ScrollContainer.propTypes = {
  movie: PropTypes.object.isRequired
}

export default ScrollContainer;