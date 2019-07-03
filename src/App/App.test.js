import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match the app snapshot", () => {
    const wrapper = shallow(<App/>);

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should be able to get the crawl from a random movie', () => {
    const wrapper = shallow(<App />);
    const movies = [
      { opening_crawl: "A long time ago" },
      { opening_crawl: "In a galaxy" },
      { opening_crawl: "Far far away" },
      { opening_crawl: "A long time ago" },
      { opening_crawl: "In a galaxy" },
      { opening_crawl: "Far far away" },
      { opening_crawl: "A long time ago" },
      { opening_crawl: "In a galaxy" },
      { opening_crawl: "Far far away" },
      { opening_crawl: "Far far away" }
    ];

    expect(wrapper.instance().chooseMovie(movies)).toEqual();
  });
});
