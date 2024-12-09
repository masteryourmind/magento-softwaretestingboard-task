import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from "../../pages/loginPage"

Given("I am on login page", () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    loginPage.click_sign_in_button()

})

When("I enter correct email id and password", () => {
    loginPage.login_email_id()
    loginPage.type_passwrod()

})

When("I click on login button", () => {
    loginPage.click_submit_signin()
})

Then("I should be able to login into my account", () => {
    cy.wait(500)
    loginPage.assert_welcome_message()
})
