@calcIntegrationTest

Feature: calc Functionality Feature

In order to ensure calc Functionality works,
I want to run the cucumber test to verify it is working

Scenario Outline: calc Functionality

Given navigate to calchome page
When user logs in using numberA as "<NumberA>" and numberB as "<NumberB>" and Operator as "<Operator>"
Then Result as "<Result>" should be displayed

Examples:
|NumberA	|NumberB	|Operator	|Result	|
|5	|2	|add	|7	|
|5	|2	|sub	|3	|
|5	|2	|mul	|10	|