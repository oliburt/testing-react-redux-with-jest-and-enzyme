import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByDataTestAttribute, checkProps } from "../../../utils";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
  
  
  describe('Checking PropTypes', () => {
      it('Should not throw a warning', () => {
          const expectedProps = {
              header: 'Test header',
              desc: 'test desc',
              tempArr: [{
                  fName: 'test fname',
                  lname: 'test lname',
                  email: 'test email',
                  age: 23,
                  onlineStatus: false,
              }]
          }
          const propsErr = checkProps(Headline, expectedProps);
          expect(propsErr).toBeUndefined();
      })
  })
  
  
  
    describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test Description"
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByDataTestAttribute(wrapper, "HeadlineComponent");
      expect(component).toHaveLength(1);
    });

    it("Should render an h1", () => {
      const h1 = findByDataTestAttribute(wrapper, "header");
      expect(h1).toHaveLength(1);
    });
    it("Should render a desc", () => {
      const desc = findByDataTestAttribute(wrapper, "desc");
      expect(desc).toHaveLength(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByDataTestAttribute(wrapper, "HeadlineComponent");
      expect(component).toHaveLength(0);
    });
  });
});
