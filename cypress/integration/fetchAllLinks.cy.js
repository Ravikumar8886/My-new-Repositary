//Suite
describe('fetching all links',()=>
{
      // TEstCase
    it('fetching all links from flipkart',()=>
    {
        cy.visit('https://www.flipkart.com/')
        //cy.get('body>div._2Sn47c>div>div>button').click()
        //cy.get('[name=q]').click()
        cy.get('a[href]')
        .each((ele)=>
        {
            cy.log(ele.text())
            //console.log(ele.text());
        })
    })
})