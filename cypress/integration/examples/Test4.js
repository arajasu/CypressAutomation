/// <reference types="Cypress" />
describe('My 4th Cypress test suite', function()
{
    it('4th Cypress test case', function()
    {
        // test steps - handling checkboxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => 
        {
            const elText = $el.text()
            if(elText.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const amtText = price.text()
                    expect(amtText).to.equal('25')
                })
            }

        })
        



        




    } )
} )