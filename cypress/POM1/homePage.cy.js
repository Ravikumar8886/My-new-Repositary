class HomePage
{
    getVisit()
    {
        return cy.visit('https://rahulshettyacademy.com/angularpractice/')
    }

    getName()
     {
        return cy.get(':nth-child(1) > .form-control')
     }
     getMail()
     {
        return  cy.get('[name=email]')
     }
     getGender()
     {
        return  cy.get('select')
     }
     getTwoName()
     {
        return cy.get('body > app-root > form-comp > div > h4 > input')
     }
     getDesabledRadio()
     {
        return  cy.get('#inlineRadio3')
     }
     
}
export default HomePage