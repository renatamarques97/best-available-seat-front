import React from 'react';
import BestSeatComponent from './../BestSeatComponent';
import { shallow } from 'enzyme';

const venueId = 1;

const bestSeat = () => {
  const enzymeWrapper = shallow(
    <BestSeatComponent venueId={ venueId }/>
  );

  return {
    enzymeWrapper
  }
}

describe("Best Seat", () => {
  describe("render", () => {
    const { enzymeWrapper } = bestSeat();

    it("should render best seat div", () => {
      const div = enzymeWrapper.find("div");
      expect(div).toHaveLength(1);
    })

    it("should render best seat form", () => {
      const form = enzymeWrapper.find("form");
      expect(form).toHaveLength(1);
    })

    it("should render best seat input", () => {
      const input = enzymeWrapper.find("input");
      expect(input).toHaveLength(1);
    })

    it("should render best seat submit button", () => {
      const button = enzymeWrapper.find("button");
      expect(button).toHaveLength(1);
    })

    it("should render best seat title", () => {
      const h2 = enzymeWrapper.find("h2");
      expect(h2).toHaveLength(1);
    })

    it("should render best seat text", () => {
      const p = enzymeWrapper.find("p");
      expect(p).toHaveLength(1);
    })
  })
})
