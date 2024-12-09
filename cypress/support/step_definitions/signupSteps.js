import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import signupPage from "../../pages/signupPage"

Given("I am on the registration page", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
})

When("I enter data in all the fields", () => {
    signupPage.type_first_name()
    signupPage.type_last_name()
    signupPage.type_email_id()
    signupPage.type_password()
    signupPage.type_confirm_password()
})

When("I enter data in all the fields but keeping existing users email id", ()=>{
    signupPage.type_first_name()
    signupPage.type_last_name()
    signupPage.type_existing_email()
    signupPage.type_password()
    signupPage.type_confirm_password()
    signupPage.click_submit_button()
})

When("I click on the create an account button", () => {
    signupPage.click_submit_button()
})

Then("I should be redirected to the user profile page", () => {
    cy.url().should("include", "customer/account/")
    signupPage.assert_profile_page_name()
})

Then("I should not be able to create an account and error message should appear", () => {
    cy.wait(500)
    signupPage.assert_alert_message()
})