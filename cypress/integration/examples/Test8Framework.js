/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
// import { split } from 'cypress/types/lodash'

describe('My 8th Cypress test suite', function()
{
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })
      
    it('8th Cypress test case', function()
    {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()

        cy.visit(Cypress.env('url')+"/angularpractice/")
        //Enter name
        //cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        homePage.getEditBox().type(this.data.name)
        //Enter Gender
        // cy.get('select').select(this.data.gender)
        homePage.getGender().select(this.data.gender)
        //validate 2nd text box has the same value of name
        // cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //validate name field length property
        // cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength', '2')
        homePage.getEditBox().should('have.attr','minlength', '2')
        //validate radio button disabled
        // cy.get('#inlineRadio3').should('be.disabled')
        homePage.getEmploymentStatus().should('be.disabled')
        //Click on shop
        // cy.get(':nth-child(2) > .nav-link').click()
        homePage.getShopTab().click()
        //using custom function and iterating through an array to select multiple products read from fixtures -> example.json
        this.data.productName.forEach(function(element) {       
            cy.selectProduct(element)    
        })
        //Click on checkout button
        productPage.getCheckoutButton().click()
        var sum = 0
        //Validate prices
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            // cy.log($el.text())
            var actualText = $el.text()
            var res = actualText.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)            
        }).then(function()
        {
            cy.log(sum)
        })

        cy.get('h3 > strong').then(function(element)
        {
            var amt = element.text()
            var res = amt.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum);
        })
        
        //Click on Checkout to complete purchase    
        checkoutPage.CheckoutBtn().click()
        //Enter country
        cy.selectDynamicDropDown('India')
        //Click Purchase
        checkoutPage.PurchaseButton().click()
        //Validate success message
        checkoutPage.SuccessMessage().should('contain.text','Success')
       


    } )
} )