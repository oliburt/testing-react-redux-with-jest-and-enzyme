import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByDataTestAttribute } from "../../../utils";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test Description"
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
        const component = findByDataTestAttribute(wrapper, 'HeadlineComponent')
        expect(component).toHaveLength(1)
    })

    it('Should render an h1', () => {
        const h1 = findByDataTestAttribute(wrapper, 'header')
        expect(h1).toHaveLength(1)
    })
    it('Should render a desc', () => {
        const desc = findByDataTestAttribute(wrapper, 'desc')
        expect(desc).toHaveLength(1)
    })
  });

  describe("Have no props", () => {
      let wrapper;
      beforeEach(() => {
          wrapper = setUp();
      })

      it('Should not render', () => {
          const component = findByDataTestAttribute(wrapper, 'HeadlineComponent')
          expect(component).toHaveLength(0);
      })
  });
});
