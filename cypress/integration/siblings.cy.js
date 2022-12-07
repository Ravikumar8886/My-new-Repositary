
describe('working on some cmds in cypress',()=>
{
    it('working on sibling cmd',()=>
    {
        cy.visit('https://www.functionize.com/h/test-automation?')
        cy.get('.w-dropdown').siblings().should('have.length','9')
        cy.get('.hs-form-radio').siblings().should('have.length','2')
    })
    it('working on parent cmd',()=>
    {
        cy.visit('https://www.functionize.com/h/test-automation?')
        cy.get('[role=banner]').parent()
        cy.get('[role=banner]').parents().should('have.length','4')
        cy.get('[role=banner]').parentsUntil('#hero')

    })

    it('working on next and children cmd',()=>
    {
        cy.visit('https://demo.actitime.com/login.do')
        cy.get('#username').click().type('admin')
        cy.get('[name=pwd]').click().type('manager')
        cy.get('#loginButton').click()
        cy.get('.logoCell.navCell').next()//it is moving to next element
        cy.get('.logoCell.navCell').nextAll().should('have.length','6')
        cy.get('.logoCell.navCell').nextUntil('#container_reports') 
    })

    it('working on children command',()=>
    {
        cy.visit('https://demo.actitime.com/login.do')
        cy.get('#username').click().type('admin')
        cy.get('[name=pwd]').click().type('manager')
        cy.get('#loginButton').click()
        //working on children command
        cy.get(':nth-child(2) > .popup_menu_container > .popup_menu_button > .popup_menu_icon > .menu_icon').click()
        cy.get('#popup_menu_items_content')
        //.children().should('have.length','12')
        .children('#popup_menu_item_3').click()
    })



})