/// <reference types="Cypress" />
describe('My second Cypress test suite', function()
{
    it('second Cypress test case', function()
    {
        // test steps - handling checkboxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //handling alerts/popups
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(str) => 
        {
            //mocha compare strings
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //windows:confirm
        cy.on('window:confirm',(str) => 
        {
            //mocha compare strings
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //handle external tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')



        




    } )
} )