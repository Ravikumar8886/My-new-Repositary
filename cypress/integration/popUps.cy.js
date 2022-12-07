describe('woking on deferent types of alerts',()=>
{
    it('working on alert',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //alert pop up
        cy.get('#alertbtn').click()
        cy.on('window:alert',(msg)=>
        {
             //cypress will click 'ok' in alert popup automatically
            expect(msg).to.equal('Hello , share this practice page and share your knowledge')
        })

        //confirm pop up
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(msg)=>
        {
            //cypress will click 'ok' in confirm popup automatically
            expect(msg).to.equal('Hello , Are you sure you want to confirm?')
            return false;
        })
    })
})