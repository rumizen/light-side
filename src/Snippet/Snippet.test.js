import React from "react";
import { shallow, mount } from "enzyme";
import Snippet from "./Snippet";

describe("Snippet", () => {
  it("should match the Snippet snapshot", () => {
    const wrapper = shallow(
      <Snippet
        category="name"
        text="Luke"
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
