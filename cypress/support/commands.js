// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => { 
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(5000)
    cy.get('.mat-form-field.ng-tns-c63-15 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(Cypress.env('username'))
    cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex').type(Cypress.env('password')).type('{enter}')
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })