import 'cypress-iframe'
describe('handling of frames ',()=>
{
    it('first way',()=>{
    cy.visit('http://the-internet.herokuapp.com/iframe')
    cy.frameLoaded("#mce_0_ifr")
    cy.iframe('#mce_0_ifr')
    .clear().type('welcome')
    cy.get('[aria-label="Bold"] > .tox-icon > svg').click()
    })

    it.only('second frame example',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe('#courses-iframe').find('[href=learning-path]').click()
    })





})