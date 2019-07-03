import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("should match the Header snapshot", () => {
    const wrapper = shallow(
    <Header faveCount={5} 
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
