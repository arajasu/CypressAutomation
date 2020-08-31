class CheckoutPage 
{
    CheckoutBtn()
    {
        return cy.get(':nth-child(5) > :nth-child(5) > .btn')
    }

    DeliveryLocation()
    {
        return cy.get('#country')
    }

    TermsAndConditionsCheckbox()
    {
        return cy.get('.checkbox')
    }

    PurchaseButton()
    {
        return cy.get('.ng-untouched > .btn')
    }
    SuccessMessage()
    {
        return cy.get('.alert')
    }

    TotalAmt()
    {
        return cy.get('h3 > strong')
    }

}

export default CheckoutPage;