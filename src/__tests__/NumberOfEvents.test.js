import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents/> componenet", ()=> {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow (<NumberOfEvents/>);
    })

    test("render NumberOfEvents textbox element", ()=> {
        expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
    });

    test("change state when input changes", () => {
        const eventObject = { target: { value: 32 }};
        NumberOfEventsWrapper.find('#numberOfEventsInput').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    })
});