import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';
import Event from '../Event';;
 
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({given, when, then}) => {
        let AppWrapper = mount(<App/>)
        let EventWrapper = mount(<Event/>);
        given('the user has loaded the app', () => {

        });

        when('the user views the event', ()=> {
        AppWrapper.update();
        EventWrapper.update();
        
        });

        then('the details should be collapsed by default', () => {
        expect(EventWrapper.state('showDetails')).toBe(false);
        });

    });

    test('User can expand an event to see its details', ({given, when, then}) => {
        given('the user has selected a city', () => {

        });

        when('the user clicks the show details button', () => {

        });

        then('the event box should expand and show more details', () => {

        });
        });

    test('User can collapse an event to hide its details', ({given, when, then}) => {
        given('the user has expanded the event details', () => {

        });

        when('the user clicks the hide details button', () => {

        });

        then('the details of the event should no longer show', () => {

        });
    });
});