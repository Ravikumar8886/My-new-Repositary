describe('demo on fixtures',function()
{
    before(()=>
    {
        cy.fixture('example').then((data)=>
        {
            this.data=data
        })
    })

    it('to open actitime webpage',()=>
    {   
        console.log(this.data);
        cy.visit(this.data.url)
        cy.get('#username').type(this.data.username)
        cy.get('[name=pwd]').type(this.data.password)
        cy.get('#loginButton').click()

    })

})