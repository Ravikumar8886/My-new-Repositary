describe('handling of drop downs',()=>
{
    it('working on static and dynamic drop downs',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //working on static dropdown
        cy.get('select').select('option2').should('have.value','option2')
        //working on dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((ele)=>
        {
            if(ele.text()==='India')
            {
                cy.wrap(ele).click()
            }
        })

        // to check visibility of input boxes
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //to check radio buttons
        // cy.get('[value=radio2]').click()
        cy.get('[value=radio2]').check().should('be.checked')

    })
})