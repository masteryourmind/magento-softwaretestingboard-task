Feature: Sign up functionality

  # Positive scenario
  Scenario: Successfully register the user account with valid data
    Given I am on the registration page
    When I enter data in all the fields
    And I click on the create an account button
    Then I should be redirected to the user profile page

  # Negative scenario
  Scenario: Sign-up fails when same user tries to register
    Given I am on the registration page
    When I enter data in all the fields but keeping existing users email id
    And I click on the create an account button
    Then I should not be able to create an account and error message should appear
