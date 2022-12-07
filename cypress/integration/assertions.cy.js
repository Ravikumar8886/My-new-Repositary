/// <reference types="cypress"/>

describe('defferent types of assertions',()=>
{
    it('implicite assertion',()=>
    {
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eql','Your Store')
        .and('have.length','10')
        
        cy.get(':nth-child(7) > .nav-link').click().url()
        .should('equals','https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=33')

        //apporach1
        // cy.url().should('contain','opencart');
        // cy.url().should('include','opencart');

         //apporach2
        .and('contain','opencart')//otherwise we can use like this
        .and('include','opencart')

        cy.title().should('eql','Cameras')
        .and('have.length','7')

        //cy.get('h3').should('have.value','Featured')//this will get failed beacuse this value is wrong
    })

   
})