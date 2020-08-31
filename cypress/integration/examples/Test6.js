/// <reference types="Cypress" />
describe('My 6th Cypress test suite', function()
{
    it('6th Cypress test case', function()
    {
        // test steps - grabbing attribute and handling child window
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //get attribute
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)

        })
       


    } )
} )