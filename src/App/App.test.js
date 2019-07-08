import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import People from "../mock-people.js";
import Vehicles from "../mock-vehicles.js";
import Planets from "../mock-planets.js";
import { shallow, mount } from "enzyme";
import App from "./App";
const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

describe("App", () => {
  let wrapper;
  let mockFetchData;
  beforeEach(function() {
    mockFetchData = [
      {
        Name: 'Steve',
        Model: 'Giselle',
        Class: '1st',
        Passnegers: 'all of em',
        isFav: true
      },
      {
        Name: 'DeMarcus',
        Model: 'All of em',
        Class: 'All of it',
        Passnegers: 'Aliens',
        isFav: false
      }
    ];
    wrapper = shallow(<App/>);
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockFetchData)
      })
    });
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(router, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match the app snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should start with default values", () => {
    expect(wrapper.instance().state).toMatchObject({people: [],
      planets: [],
      vehicles: [],
      faveCount: 0,
      movie: {},
      error: ""})
  });

  it("should be able to create a filtered mapped array of people data", () => {
    expect(wrapper.instance().cleanPeople(People.results).length).toEqual(10);
  });

  it("should be able to create a filtered mapped array of planet data", () => {
    expect(wrapper.instance().cleanPlanets(Planets.results).length).toEqual(10);
  });

  it("should be able to create a filtered mapped array of vehicle data", () => {
    expect(wrapper.instance().cleanVehicles(Vehicles.results).length).toEqual(10)
  });

  it("getPeople should fetch data correctly", () => {
    const url = "https://swapi.co/api/people/?page=1";
    
    wrapper.instance().getPeople();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it("getVehicles should fetch data correctly", () => {
    const url = "https://swapi.co/api/vehicles/?page=1";

    wrapper.instance().getVehicles();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it("getPlanets should fetch data correctly", () => {
    const url = "https://swapi.co/api/planets/?page=1";

    wrapper.instance().getPlanets();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it("getFilms should fetch data correctly", () => {
    const url = "https://swapi.co/api/films/?page=1";

    wrapper.instance().getFilms();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should toggle isFav property from toggleFavorite', () => {
    wrapper.setState({ people: mockFetchData})
    wrapper.instance().toggleFavorite('Steve');
    expect(wrapper.instance().state.people[0].isFav).toEqual(false)
  })

  it('should increment and decrement faveCount', () => {
    wrapper.instance().updateFavorites({}, true);
    expect(wrapper.instance().state.faveCount).toEqual(1);
    wrapper.instance().updateFavorites({}, false)
    expect(wrapper.instance().state.faveCount).toEqual(0);
  })
  
  it('should add card to favorites array', () => {
    wrapper.instance().addFavorite(mockFetchData[0]);
    expect(wrapper.instance().state.favorites.length).toEqual(1)
    expect(wrapper.instance().state.favorites).toEqual([{
      Name: 'Steve',
      Model: 'Giselle',
      Class: '1st',
      Passnegers: 'all of em',
      isFav: true
    }])
  })

  it('should remove cards from favorite array', () => {
    wrapper.instance().addFavorite(mockFetchData[1]);
    expect(wrapper.instance().state.favorites.length).toEqual(1)
    wrapper.instance().removeFavorite(mockFetchData[1]);
    expect(wrapper.instance().state.favorites.length).toEqual(0)
  })
});
