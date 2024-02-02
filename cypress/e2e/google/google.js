import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("go to web and login", ()=>{
    cy.login()
})

When("Wait to Loading page and Check Word {string}", (wording)=>{
    cy.get("h1.mb-0")
    .should('have.text', wording)
})
