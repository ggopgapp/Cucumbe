import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("go to web", ()=>{
    cy.visit("https://fm-dev.sitearound.com/")
})

When("action", ()=>{
    cy.get("#login-form_username")
    .type("superadmin@swiftdynamics.co.th")
    cy.get("#login-form_password")
    .type("12345678")
    .type("{enter}")
    cy.get("h1.mb-0").should("be.visible")
})

Then("end", ()=>{
    cy.wait(4000)
})