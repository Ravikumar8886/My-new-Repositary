
/// <reference types="cypress"/>

describe('me suite', function () 
{
    it('do some actions in web page', function () 
    {
        cy.viewport(1280, 720)
        cy.visit('https://www.amazon.com/')

        cy.get('#twotabsearchtextbox').type('Apple macBook')
        cy.get('#nav-search-submit-button').click()
        cy.wait(2000)
        cy.get('[data-asin="B0B3C7MJX3"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-section.a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click({force:true})
        //var tx=cy.get('#corePrice_desktop > div > table > tbody > tr > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span:nth-child(2)').then().invoke()
        //cy.log(tx);
        // cy.get('[data-asin="B0B3C7MJX3"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-section.a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()

        // cy.get('#twotabsearchtextbox').type('Apple macbook');
        // cy.get('#nav-search-submit-button').click();
        // cy.get('[data-asin="B08N5M7S6K"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-top-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click({force:true});
       
    })
})