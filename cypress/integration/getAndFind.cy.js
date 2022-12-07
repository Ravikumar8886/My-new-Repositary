

describe('get and find defference',()=>
{
    it('get and find defference',()=>
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.products').find('.product').each((ele)=>
       {
            const vegName=ele.find('h4.product-name').text()
            if(vegName.includes('Carrot'))
            {
              cy.wrap(ele).find('[type=button]').click()
           }
         })
       
        // cy.get('[type=search]').type('carrot')
        // cy.get('[type=submit]').click()

    })
})