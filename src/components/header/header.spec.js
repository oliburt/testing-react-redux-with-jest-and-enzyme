import React from "react";
import { shallow } from 'enzyme';
import Header from "./index";
import { findByDataTestAttribute } from "../../../utils";

const setUp = (props={}) => {
    return shallow(<Header {...props} />)
}

describe('Header Component', () => {
    
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {
        console.log(component.debug())
        const wrapper = findByDataTestAttribute(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByDataTestAttribute(component, 'logoIMG');
        expect(logo).toHaveLength(1);
    })
    
})