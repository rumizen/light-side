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
  beforeEach(function() {
    wrapper = shallow(<App/>);
  })
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
  })

  it("should be able to create a filtered mapped array of people data", () => {
    expect(wrapper.instance().cleanPeople(People.results).length).toEqual(10);
  })

  it("should be able to create a filtered mapped array of planet data", () => {
    expect(wrapper.instance().cleanPlanets(Planets.results).length).toEqual(10);
  })

  it("should be able to create a filtered mapped array of vehicle data", () => {
    expect(wrapper.instance().cleanVehicles(Vehicles.results).length).toEqual(10)
  })
});
