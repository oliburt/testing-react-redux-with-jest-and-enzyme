import React from "react";
import { shallow } from "enzyme";
import { findByDataTestAttribute, checkProps } from "./../../../utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "some text"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "some text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should render without error", () => {
      const component = findByDataTestAttribute(wrapper, "listItemComponent");
      expect(component).toHaveLength(1);
    });

    it("Should render a title", () => {
      const title = findByDataTestAttribute(wrapper, "componentTitle");
      expect(title).toHaveLength(1);
    });

    it("Should render a desc", () => {
      const desc = findByDataTestAttribute(wrapper, "componentDesc");
      expect(desc).toHaveLength(1);
    });
  });

  describe("Should NOT Render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "some text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByDataTestAttribute(wrapper, "listItemComponent");
      expect(component).toHaveLength(0);
    });
  });
});
