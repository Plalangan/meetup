import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe("<Event/> Component", () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event/>)
    });

    test('render the component', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });
})