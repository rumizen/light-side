import React from "react";
import { shallow, mount } from "enzyme";
import Card from "./Card";
import { jsxEmptyExpression } from "@babel/types";

describe("Card", () => {
  let wrapper;
  let mockToggleFavorite;
  beforeEach(() => {
    mockToggleFavorite = jest.fn();
    wrapper = mount(
      <Card
        isFav={false}
        name="luke"
        gender="male"
        eyeColor="blue"
        height={6}
        birthYear={1992}
        toggleFavorite={mockToggleFavorite}
      />
    );
  });

  it("should match the card snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run toggleFavorite on click', () => {
    wrapper.find('div').simulate('click');

    expect(wrapper.prop('toggleFavorite')).toHaveBeenCalled();
  });

  it('should match the snapshot when favorited', () => {
    wrapper = mount(
      <Card
        isFav={true}
        name="luke"
        gender="male"
        eyeColor="blue"
        height={6}
        birthYear={1992}
        toggleFavorite={mockToggleFavorite}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
});
