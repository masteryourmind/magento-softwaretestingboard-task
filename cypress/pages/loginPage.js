class Login{
    elements = {
        sign_in_button: () => cy.get("div[class='panel header'] li[data-label='or'] a"),
        email_field: () => cy.get("#email"),
        password_field: () => cy.get("#pass"),
        submit_signin: () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'),
        welcome_message: () => cy.get("div[class='panel header'] span[class='logged-in']")
    }
    click_sign_in_button(){
        this.elements.sign_in_button().click({force: true})
    }
    login_email_id(usr="vishal.sadawarte@gmail.com"){
        this.elements.email_field().type(usr)
    }
    type_passwrod(){
        this.elements.password_field().type(Cypress.env('userPassword'), { log: false })
    }
    click_submit_signin(){
        this.elements.submit_signin().click()
    }
    assert_welcome_message(txt="Welcome, Vishal Sadawarte!"){
        this.elements.welcome_message().should('have.text', txt)
    }
}

module.exports = new Login()