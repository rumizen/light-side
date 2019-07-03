import React from "react";
import { shallow, mount } from "enzyme";
import FavoritesBar from "./FavoritesBar";

describe("FavoritesBar", () => {
  it("should match the FavoritesBar snapshot", () => {
    const wrapper = shallow(
    <FavoritesBar
      faveCount={5}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
