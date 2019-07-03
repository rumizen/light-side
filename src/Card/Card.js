import React, { Component } from 'react';
import './Card.scss';
import Snippet from '../Snippet/Snippet.js';


class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    };
  }

  render() {
    const snippets = Object.keys(this.props).map(snippet => {
      return <Snippet
        category={snippet}
        text={this.props[snippet]}
        />
    });

    return (
      <section className="card" id={Date.now()} key={Date.now()}>
        <h2>{this.props.name}</h2>
        {snippets}
        <div>
          <img />
          <img />
        </div>
      </section>
    );
  };
};

export default Card;