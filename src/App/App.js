import React, { Component } from "react";
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
      favorites: [],
      faveCount: 0,
      movie: {},
      error: ""
    };
  }

  toggleFavorite = name => {
    const targetCard = [...this.state.people, ...this.state.planets, ...this.state.vehicles].find(card => {
      return card.Name === name;
    });
    targetCard.isFav = !targetCard.isFav;
    this.updateFavorites(targetCard, targetCard.isFav);
  }

  updateFavorites = (card, bool) => {
      if (bool) {
        this.setState({ faveCount: this.state.faveCount + 1 });
        this.addFavorite(card);
      } else {
        this.setState({ faveCount: this.state.faveCount - 1 });
        this.removeFavorite();
      }
  }

  addFavorite = card => {
    this.setState({ favorites: [...this.state.favorites, card] })
  }

  removeFavorite = () => {
    const filteredFavorites = this.state.favorites.filter(fav => fav.isFav);
    this.setState({ favorites: filteredFavorites });
  }

  cleanPeople = data => {
    return data.map(unit => {
      return {
        Name: unit.name,
        Gender: unit.gender,
        EyeColor: unit.eye_color,
        Height: unit.height,
        BirthYear: unit.birth_year,
        isFav: false
      };
    });
  };

  cleanPlanets = data => {
    return data.map(unit => {
      return {
        Name: unit.name,
        Terrain: unit.terrain,
        Diameter: unit.diameter,
        Population: unit.population,
        isFav: false
      };
    });
  };

  cleanVehicles = data => {
    return data.map(unit => {
      return {
        Name: unit.name,
        Model: unit.model,
        Class: unit.vehicle_class,
        Passengers: unit.passengers,
        isFav: false
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
    return fetch("https://swapi.co/api/people/?page=1")
      .then(response => response.json())
      .then(data => this.cleanPeople(data.results))
      .then(cleanData => this.setState({ people: cleanData }))
      .catch(error => this.setState({ error: error.message }));
  };

  getPlanets = () => {
    return fetch("https://swapi.co/api/planets/?page=1")
      .then(response => response.json())
      .then(data => this.cleanPlanets(data.results))
      .then(cleanData => this.setState({ planets: cleanData }))
      .catch(error => this.setState({ error: error.message }));
  };

  getVehicles = () => {
    return fetch("https://swapi.co/api/vehicles/?page=1")
      .then(response => response.json())
      .then(data => this.cleanVehicles(data.results))
      .then(cleanData => this.setState({ vehicles: cleanData }))
      .catch(error => this.setState({ error: error.message }));
  };

  getFilms = () => {
    return fetch("https://swapi.co/api/films/?page=1")
      .then(response => response.json())
      .then(data => this.setState({ movie: this.chooseMovie(data.results) }))
      .catch(error => this.setState({ error: error.message }));
  };

  chooseMovie = data => {
    const randomIndex = Math.floor(Math.random() * Math.floor(7));
    return data[randomIndex];
  };

  render() {
    return (
      <div className="app">
        <img
          src="https://img.wallpapersafari.com/desktop/1920/1080/38/65/Fcx7LA.jpg"
          alt="Darth Vader"
          className="background-img"
        />
        <ScrollContainer movie={this.state.movie} />
        <Header faveCount={this.state.faveCount} />
        <Route
          exact
          path="/people"
          render={() => (
            <CardContainer
              category={this.state.people}
              updateFavorites={this.updateFavorites}
              toggleFavorite={this.toggleFavorite}
            />
          )}
        />
        <Route
          exact
          path="/vehicles"
          render={() => (
            <CardContainer
              category={this.state.vehicles}
              updateFavorites={this.updateFavorites}
              toggleFavorite={this.toggleFavorite}
            />
          )}
        />
        <Route
          exact
          path="/planets"
          render={() => (
            <CardContainer
              category={this.state.planets}
              updateFavorites={this.updateFavorites}
              toggleFavorite={this.toggleFavorite}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <CardContainer
              category={this.state.favorites}
              updateFavorites={this.updateFavorites}
              toggleFavorite={this.toggleFavorite}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
