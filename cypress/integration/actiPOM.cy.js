class ActiPOM
{
    openActi()
    {
        cy.visit('https://demo.actitime.com/login.do')
    }
    forUsername(value)
    {
      var un=cy.get('#username')
      un.clear()
      un.type(value)

    return this;
    }

    forPossward(value)
    {
      var pw=cy.get('[name=pwd]')
      pw.clear()
      pw.type(value)

    return this;
    }

    toSignin()
    {
        cy.get("#loginButton").click();
    }
}
export default ActiPOM
