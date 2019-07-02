import React, { Component } from "react";
import "./App.scss";
import ScrollContainer from '../ScrollContainer/ScrollContainer.js';
import Header from "../Header/Header.js";
import CardContainer from "../CardContainer/CardContainer.js";


class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      faveCount: 0,
      movie: 'Sample'
    };
  }

  render() {
    return (
      <div className="app">
        <ScrollContainer movie={this.state.movie} />
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
