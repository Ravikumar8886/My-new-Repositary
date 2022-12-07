

describe('my suite',function()
{
    
    before(function()
    { 
         cy.log('this function is used to set up the server')

    })
    beforeEach(function() 
    {
        cy.log('this will get executed before every test')
    })

    afterEach(function()
    {
        cy.log('this function will get executed after every function')
     })

     after(function()
     {
        cy.log('this function is used to close the sever')
     })

     it('open Amazon',function()
        {
            cy.visit('https://www.amazon.in/')
            cy.get('#twotabsearchtextbox').type('Apple')
            cy.get('#nav-search-submit-button').click({force:true})
        }
    )

    it('open Amazon',function()
    {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('Nokia')
        cy.get('#nav-search-submit-button').click({force:true})
    })

})




