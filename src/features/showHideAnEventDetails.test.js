import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';

 
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    
    test('An event element is collapsed by default', ({given, when, then}) => {
        
        given('the user has loaded the app', () => {
            AppWrapper = mount (<App/>);
        });

        when('the user views the event', ()=> {
        AppWrapper.update();
        
        
        });

        then('the details should be collapsed by default', () => {
           expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
        });

    });

    test('User can expand an event to see its details', ({given, when, then}) => {
        given('the user has selected a city', () => {
            AppWrapper = mount(<App/>);
        });

        when('the user clicks the show details button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-btn').at(0).simulate('click')
        });

        then('the event box should expand and show more details', () => {
            expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
        });
        });

    test('User can collapse an event to hide its details', ({given, when, then}) => {
        let AppWrapper = mount(<App/>);
        given('the user has expanded the event details', () => {
        AppWrapper.update();
        AppWrapper.find('.event .details-btn').at(0).simulate('click');
        expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
        });

        when('the user clicks the hide details button', () => {
        AppWrapper.update();
        AppWrapper.find('.event .details-btn').at(0).simulate('click');
        });

        then('the details of the event should no longer show', () => {
        expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
        });
    });
});