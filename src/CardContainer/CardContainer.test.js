import React from "react";
import { shallow, mount } from "enzyme";
import CardContainer from "./CardContainer";
import Data from "../mock-people";

describe("CardContainer", () => {
  it("should match the CardContainer snapshot", () => {
    const wrapper = shallow(
      <CardContainer
        category={Data.results}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
