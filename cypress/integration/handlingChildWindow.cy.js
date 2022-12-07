describe('working on child tab',()=>
{
    it('on new tab',()=>
    {
        cy.visit('https://www.flipkart.com/')
        cy.get('[name=q]').type('mobiles')
        cy.get('[type=submit]').click()
        cy.contains('SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)')
        .invoke('removeAttr','target').click({force:true})
        cy.get('.CEmiEU > ._25b18c > ._30jeq3').then((cost)=>
        {
            cy.log(cost.text())
        })
       
        // cy.on('uncaught:exception',()=>
        // {
        //     cy.go('back')
        // })
       

    })
})