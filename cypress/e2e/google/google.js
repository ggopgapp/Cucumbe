import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("go to web", ()=>{
    cy.visit("https://fm-dev.sitearound.com/")
})

When("Login {string} and {string}", (username, password)=>{
    cy.get("#login-form_username")
    .type(username)
    cy.get("#login-form_password")
    .type(password)
})

Then("Enter for Login", ()=>{
    cy.get("#login-form_password")
    .type("{enter}")
})

When ("Wait to Loading page", ()=>{
    cy.wait()
})

And("Check Wording {string}", (wording)=>{
    cy.get("h1.mb-0")
    .should('have,text', wording)
})