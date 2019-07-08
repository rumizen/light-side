import React from 'react';
import "react-star-wars-crawl/lib/index.css";
import './ScrollContainer.scss';
import Crawl from "react-star-wars-crawl";

const ScrollContainer = ({ movie }) => {
  return (
    <Crawl
      className="scroll-container"
      title={movie.episode_id}
      subTitle={movie.title}
      text={movie.opening_crawl}
      height="20%"
    />
  );
}

export default ScrollContainer;