import App from './App';
import { shallow } from "enzyme";
import { findByDataTestAttribute, testStore } from "./../utils";
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive()
    return wrapper
}

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    id: 1,
                    title: 'Ex title 1',
                    body: 'Some Text'
                },
                {
                    id: 2,
                    title: 'Ex title 2',
                    body: 'Some Text'
                },
                {
                    id: 3,
                    title: 'Ex title 3',
                    body: 'Some Text'
                }
            ]
        };
        wrapper = setUp(initialState)

    });

    it('Should render without errors', () => {
        const component = findByDataTestAttribute(wrapper, 'appComponent');
        expect(component).toHaveLength(1)
    })
})
