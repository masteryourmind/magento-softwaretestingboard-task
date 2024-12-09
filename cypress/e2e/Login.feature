Feature: Login functionality

  # Positive scenario
  Scenario: Successfully login into users account after providing valid email and password
    Given I am on login page
    When I enter correct email id and password
    And I click on login button
    Then I should be able to login into my account