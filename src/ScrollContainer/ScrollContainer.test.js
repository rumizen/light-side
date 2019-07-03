import React from "react";
import { shallow, mount } from "enzyme";
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
