/// <reference types="Cypress" />
describe('My 5th Cypress test suite', function()
{
    it('5th Cypress test case', function()
    {
        // test steps - handling checkboxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handling mouse over
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        //cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')


    } )
} )