import React, { Component } from 'react';
import './Card.scss';
import Snippet from '../Snippet/Snippet.js';


class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const snippets = this.props.map(info => {
      return <Snippet category={info.title} text={info.text} />
    });

    return (
      <section className="card">
        <h2>Card Title</h2>
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