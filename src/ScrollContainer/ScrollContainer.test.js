import React from "react";
import { shallow } from "enzyme";
import ScrollContainer from "./ScrollContainer";

describe("ScrollContainer", () => {
  it("should match the ScrollContainer snapshot", () => {
    const wrapper = shallow(
      <ScrollContainer
        movie="Return of the Jedi"
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
