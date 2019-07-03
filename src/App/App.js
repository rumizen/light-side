import React, { Component } from "react";
import Data from '../mock-people.js';
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
      movie: '',
      error: ''
    };
  }

  componentDidMount() {
    this.getPeople();
    this.getVehicles();
    this.getPlanets();
    this.getFilms();
  }

  getPeople = () => {
    fetch('https://swapi.co/api/people/?page=1')
      .then(response => response.json())
      .then(data => this.setState({ people: data.results }))
      .catch(error => this.setState({ error: error.message }))
  }

  getPlanets = () => {
    fetch('https://swapi.co/api/planets/?page=1')
      .then(response => response.json())
      .then(data => this.setState({ planets: data.results }))
      .catch(error => this.setState({ error: error.message }))
  }

  getVehicles = () => {
    fetch('https://swapi.co/api/vehicles/?page=1')
      .then(response => response.json())
      .then(data => this.setState({ vehicles: data.results }))
      .catch(error => this.setState({ error: error.message }))
  }

  getFilms = () => {
    fetch('https://swapi.co/api/films/?page=1')
      .then(response => response.json())
      .then(data => this.setState({ movie: this.chooseMovie(data.results)}))
      .catch(error => this.setState({ error: error.message }))
  }

  chooseMovie = data => {
    const randomIndex = Math.floor(Math.random() * Math.floor(10))
    return data[randomIndex].opening_crawl
  }

  render() {
    return (
      <div className="app">
        <img src="https://img.wallpapersafari.com/desktop/1920/1080/38/65/Fcx7LA.jpg" alt="Darth Vader" />
        <ScrollContainer movie={this.state.movie} />
        <Header faveCount={this.state.faveCount}/>
        <CardContainer category={this.state.people} />
      </div>
    );
  }
}

export default App;
