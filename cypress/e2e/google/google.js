import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import {randomTextEN, randomTextTH, randomNumber} from '../../support/ttt.js'
import 'cypress-xpath'
import 'cypress-file-upload'

Given("go to web and login", ()=>{
    cy.login()
    cy.wait(5000)
})

When("go to Reward Menagement Menu", ()=>{
    cy.get('span').contains('Reward').click()
    cy.xpath('(//span[normalize-space()="Reward Management"])[1]').click()
    cy.xpath('(//mat-card-content[contains(text(),"ของรางวัล")])[1]').click()
})

Then("Check {string} Page",(Reward)=>{
    cy.xpath('(//h2[contains(text(),"ของรางวัล")])[1]').contains(Reward)
})

When("Select Project {string}",(Project)=>{
    cy.wait(2000)
    cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-value').click()
    cy.contains(Project).click()
})

When("Select Catalog {string}",(Test01)=>{
    cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value').click()
    cy.contains(Test01).click()
})

When("Input Detail Reward",()=>{
    cy.get('#mat-input-4').type(randomTextTH(5))
    cy.get('#mat-input-5').type(randomTextEN(5))
    cy.get('#mat-input-6').type(randomNumber(5))
    cy.get('#mat-input-7').type(randomNumber(3))
    cy.get('#mat-input-8').type(randomNumber(3))
    cy.get('#mat-input-10').type(randomTextEN(5))
    cy.get('#mat-input-11').type(randomTextEN(5))
    cy.get('input.dx-fileuploader-input').attachFile('testing.png')
})
