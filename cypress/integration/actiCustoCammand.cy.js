/// <reference types="cypress"/>

describe('custom cammands',() =>
{
    it('login to actitime',()=> 
    {
        cy.login('admin','manager')
    })

})