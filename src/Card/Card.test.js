import React from "react";
import { shallow, mount } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  it("should match the card snapshot", () => {
    const wrapper = shallow(
      <Card
        name="luke"
        gender="male"
        eyeColor="blue"
        height={6}
        birthYear={1992}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
