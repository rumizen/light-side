import React from "react";
import { shallow, mount } from "enzyme";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("should match the NavBar snapshot", () => {
    const wrapper = shallow(<NavBar/>);

    expect(wrapper).toMatchSnapshot();
  });
});
