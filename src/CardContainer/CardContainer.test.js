import React from "react";
import { shallow } from "enzyme";
import CardContainer from "./CardContainer";
import Data from "../mock-people";

describe("CardContainer", () => {
  it("should match the CardContainer snapshot", () => {
    const wrapper = shallow(<CardContainer category={Data.results} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the CardContainer snapshot with no favorites", () => {
    const mockData = [];
    const wrapper = shallow(<CardContainer category={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
