Feature: Show or hide event details

Scenario: An event element is collapsed by default
    Given the user has loaded the app
    When the user views the event
    Then the details should be collapsed by default

Scenario: User can expand an event to see its details
Given the user has selected a city
When the user clicks the show details button
Then the event box should expand and show more details

Scenario: User can collapse an event to hide its details
Given the user has expanded the event details
When the user clicks the hide details button
Then the details of the event should no longer show