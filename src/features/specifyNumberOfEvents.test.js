import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
 
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When the user hasn\'t specified a number, 32 is the default number', ({given, when, then}) => {
        let AppWrapper;
        given('the user has entered a different number', () => {
            
        });

        when('the user loads the app', () => {
            AppWrapper = mount(<App/>);
        });

        then('they will see a maximum of 32 events by default', () => {
            AppWrapper.update();
            expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
        });

    });

    test('User can change the number of events they want to see', ({given, when, then}) => {
        let AppWrapper = mount(<App/>);
        given('the user wants to see more or less events on the page', () => {
           
        });

        when('the user changes the number for events shown', () => {
            AppWrapper.find('.NumberOfEvents').simulate('change', { target: {value: 5}});
        });

        then('the number of events shown will be the same as that entered by the user', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
        });
    });
});