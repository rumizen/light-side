import React, { Component } from "react";
import People from "../mock-people.js";
import Vehicles from "../mock-vehicles.js";
import Planets from "../mock-planets.js";
import { Route } from "react-router-dom";
import "./App.scss";
import ScrollContainer from "../ScrollContainer/ScrollContainer.js";
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
      movie: "",
      error: ""
    };
  }

  cleanPeople = data => {
    return data.map(unit => {
      return {
        Name: unit.name,
        Gender: unit.gender,
        EyeColor: unit.eye_color,
        Height: unit.height,
        BirthYear: unit.birth_year
      };
    });
  };

  cleanPlanets = data => {
    return data.map(unit => {
      return {
        Name: unit.name,
        Terrain: unit.terrain,
        Diameter: unit.diameter,
        Population: unit.population
      };
    });
  };

  cleanVehicles = data => {
    return data.map(unit => {
      return {
        Name: unit.name,
        Model: unit.model,
        Class: unit.vehicle_class,
        Passnegers: unit.passengers
      };
    });
  };

  componentDidMount() {
    this.getPeople();
    this.getVehicles();
    this.getPlanets();
    this.getFilms();
  }

  getPeople = () => {
    fetch("https://swapi.co/api/people/?page=1")
      .then(response => response.json())
      .then(data => this.cleanPeople(data.results))
      .then(cleanData => this.setState({ people: cleanData }))
      .catch(error => this.setState({ error: error.message }));
  };

  getPlanets = () => {
    fetch("https://swapi.co/api/planets/?page=1")
      .then(response => response.json())
      .then(data => this.cleanPlanets(data.results))
      .then(cleanData => this.setState({ planets: cleanData }))
      .catch(error => this.setState({ error: error.message }));
  };

  getVehicles = () => {
    fetch("https://swapi.co/api/vehicles/?page=1")
      .then(response => response.json())
      .then(data => this.cleanVehicles(data.results))
      .then(cleanData => this.setState({ vehicles: cleanData }))
      .catch(error => this.setState({ error: error.message }));
  };

  getFilms = () => {
    fetch("https://swapi.co/api/films/?page=1")
      .then(response => response.json())
      .then(data => this.setState({ movie: this.chooseMovie(data.results) }))
      .catch(error => this.setState({ error: error.message }));
  };

  chooseMovie = data => {
    const randomIndex = Math.floor(Math.random() * Math.floor(10));
    return data[randomIndex].opening_crawl;
  };

  render() {
    return (
      <div className="app">
        <img
          src="https://img.wallpapersafari.com/desktop/1920/1080/38/65/Fcx7LA.jpg"
          alt="Darth Vader"
        />
        <ScrollContainer movie={this.state.movie} />
        <Header faveCount={this.state.faveCount} />
        <Route
          exact
          path="/people"
          render={() => <CardContainer category={this.state.people} />}
        />
        <Route
          exact
          path="/vehicles"
          render={() => <CardContainer category={this.state.vehicles} />}
        />
        <Route
          exact
          path="/planets"
          render={() => <CardContainer category={this.state.planets} />}
        />
      </div>
    );
  }
}

export default App;
