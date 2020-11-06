Feature: Specify number of events

Scenario: When the user hasn't specified a number, 32 is the default number
Given the user has entered a different number
When the user loads the app
Then they will see a maximum of 32 events by default

Scenario: User can change the number of events they want to see
Given the user wants to see more or less events on the page
When the user changes the number for events shown
Then the number of events shown will be the same as that entered by the user
