describe('mouse handlings',()=>
{
    it('mouse over to specific element',()=>
    {
        cy.visit('https://demo.opencart.com/')
        cy.get('#content > div.row > div:nth-child(1) > form > div > div.content > div.button-group > button:nth-child(1')
        .trigger('mouseover')
    })

    it('for right click',()=>
    {
        cy.visit('https://demo.opencart.com/')
        cy.wait(3000)
        cy.get('#narbar-menu > ul > li:nth-child(2) > a').trigger('contextmenu')
    })

    it.only('for scroll web page',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.scrollTo('center')
        //cy.scrollIntoView('')

    })
})