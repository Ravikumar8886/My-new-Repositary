
describe('My suite',function()
{
    it('verifying title of nopcommerce',function()
    {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
    })
})