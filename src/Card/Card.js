import React, { Component } from 'react';
import '../images/star.png';
import '../images/starfav.png';
import './Card.scss';
import Snippet from '../Snippet/Snippet.js';


class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFavorited: false
    };
  }

  favoriteCard = () => {
    this.setState({ isFavorited: !this.state.isFavorited })
    setTimeout(() => {
      this.props.updateFaveCount(this.state.isFavorited);
    })
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
        <div onClick={this.favoriteCard}>
          {!this.state.isFavorited && 
          <img src={require('../images/star.png')} alt='' className='fav-icon'/> }
          {this.state.isFavorited && 
          <img src={require('../images/starfav.png')} alt='' className='fav-icon'/> }      
        </div>
      </section>
    );
  };
};

export default Card;