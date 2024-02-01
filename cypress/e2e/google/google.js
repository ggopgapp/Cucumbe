import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("go to web and login {string} and {string}", (username, password)=>{
    cy.login(username , password)
})

When("Enter for Login", ()=>{
    cy.get('h1.mb-0').should('be.visible')
})

Then("Wait to Loading page and Check Word {string}", (wording)=>{
    cy.get("h1.mb-0")
    .should('have.text', wording)
})
