describe('handling web tables',()=>
{
    it('work on web tabls',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.scrollTo('center')
        cy.get('tr td:nth-child(2)').each(($ele,index,list)=>
        {
          const coltx=$ele.text()
            if(coltx.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then((cost) =>
                {
                   const colPrice= cost.text()
                   expect(colPrice).to.equal('25')
                })
                
            }
        })
    })
    it('work on mouse hover',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').invoke('show')
        //cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force:true})
        
    })
})