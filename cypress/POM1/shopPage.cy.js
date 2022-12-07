class ShopPage
{
     getShopBtn()
     {
        return cy.get(':nth-child(2) > .nav-link')
     }
     getCheckOutBtn()
     {
       return cy.get('.nav-link.btn.btn-primary')
     }
     getSecCheckout()
     {
       return cy.get('.btn.btn-success')
     }
     getDeliveryLoc()
     {
       return cy.get('#country')
     }
     getEnterdCountry()
     {
       return cy.get('.suggestions > :nth-child(1) > li > a')
     }
     getCheckBx()
     {
       return cy.get('.checkbox > label')
     }
     toPurchage()
     {
        return cy.get('.ng-untouched > .btn')
     }

}
export default ShopPage