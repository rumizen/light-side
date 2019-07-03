import React from "react";
import { shallow, mount } from "enzyme";
import CategoryBtn from "./CategoryBtn";

describe("CategoryBtn", () => {
  it("should match the CategoryBtn snapshot", () => {
    const wrapper = shallow(
      <CategoryBtn
        name="People"
        icon="👥"
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
