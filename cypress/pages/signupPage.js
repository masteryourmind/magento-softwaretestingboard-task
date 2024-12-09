class Signup{
    elements = {
        create_account_button: () => cy.get(".panel > .header > :nth-child(3) > a"),
        first_name: () => cy.get('#firstname'),
        last_name: () => cy.get("#lastname"),
        email_id: () => cy.get("#email_address"),
        password_field: () => cy.get("#password"),
        password_confirm: () => cy.get("#password-confirmation"),
        submit_button: () => cy.get("div[class='actions-toolbar'] button[title='Create an Account'] span"),
        alert_message: () => cy.get('div[role="alert"]'),
        profile_page_name: () => cy.get('div[class="block block-dashboard-info"] p'),
    }
    

    click_create_account_button() {
        this.elements.create_account_button().click({force: true})
    }
    type_first_name(f_name="Vishal") {
        this.elements.first_name().type(f_name)
    }
    type_last_name(l_name="Sadawarte"){
        this.elements.last_name().type(l_name)
    }
    type_email_id(){
        const uniqueEmail = `vishal.sadawarte+${Date.now()}@gmail.com`
        this.elements.email_id().type(uniqueEmail)
    }
    type_password(){
        this.elements.password_field().type(Cypress.env('userPassword'), { log: false })
    }
    type_confirm_password(){
        this.elements.password_confirm().type(Cypress.env('userPassword'), { log: false })
    }
    click_submit_button(){
        this.elements.submit_button().click()
    }
    type_existing_email(existing_user="vishal.sadawarte@gmail.com"){
        this.elements.email_id().type(existing_user)
    }
    assert_alert_message(){
        this.elements.alert_message().should("be.visible")
        .and('contain', 'There is already an account with this email address. If you are sure that it is your email address')
    }
    assert_profile_page_name(txt="Vishal Sadawarte"){
        this.elements.profile_page_name().should('contain', txt)
    }

}


module.exports = new Signup()
