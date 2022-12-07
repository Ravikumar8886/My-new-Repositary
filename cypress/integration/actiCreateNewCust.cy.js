

import Tasks from '../POM1/actiTimeTask.cy'
import Reports from '../POM1/actiTimeReports.cy'

let ts=new Tasks();
let reports=new Reports();
// before("before", ()=>
//     {
//     cy.fixture('example').then(function(data){
//         console.log(JSON.stringify(data));
//          this.data=data;
//     })
//   })

before(function()
{
    cy.fixture('example').then(function(data)   //use of function keyword is madatory.
    {
    this.data=data;
    })
})

//to generate random usernames
const randomCls = () => Cypress._.random(0, 1e6)
const id = randomCls()
const testname = `Ravi${id}`

describe('working on tasks module',()=>
{   
    it('should create new customer',function()   //use of function keyword is madatory.
    {   
        cy.login(this.data.username,this.data.password);
        ts.getTask().click();
        ts.getAddNew().click();
        ts.getNewCust().click();
        ts.giveName().type(testname);
        ts.giveDescription().type(this.data.description);
        ts.toSelectDropDown().click();
        ts.toSelectItem().click();
        ts.createBtn().click();
        ts.toValidateName().as('waitforTitle')
        
        cy.wait('@waitforTitle').then(function(){
            ts.toValidateName().should('have.text',testname);
        })
    })

    it.only('should not create new customer',function()    //use of function keyword is madatory.
    {
        cy.login(this.data.username,this.data.password);
        ts.getTask().click();
        ts.getAddNew().click();
        ts.getNewCust().click();
        ts.giveName().type(testname);
        ts.giveDescription().type(this.data.description);
        ts.toSelectDropDown().click();
        ts.toSelectItem().click();
        ts.createBtn().click();
        ts.toValidateErrorMsg()
        .should('have.text','Customer with the specified name already exists')
        ts.toValidateText()
        .should('have.text',
        'Assigned users and managers of the new customer will get access to all its projects & tasks')
    })

    it.only('should prepare a report on staff performance',function()
    {
        cy.login(this.data.username,this.data.password);
        reports.getReport().click();
        reports.getNewReport().click();
        reports.getConfigureParameters().click();
        cy.wait(2000);
        reports.toGenerateHTMLRpts().click();
        reports.getAddtoDbBtn().type(testname);
        reports.toSave().click();
        reports.reportsDb().click()
        reports.toValidateRpts().each(function(ele)
        {
            var dbName= ele.text()
            if(dbName==testname)
            {
                cy.log('assertion is successfully done.')
            }
        })
    })
    describe('working on report module',function()
    {
        it.only('should prepare a report in vertical manner',function()
    {
        cy.login(this.data.username,this.data.password);
        reports.getReport().click();
        reports.getCreateChart().click();
        reports.getVerticalBar().click();
        //reports.getReportDb().click({force:true}).type(testname);
        //reports.toSave().click();
    })
    it.only('should prepare a report in horizantal manner',function()
    {
        cy.login(this.data.username,this.data.password);
        reports.getReport().click();
        reports.getCreateChart().click();
        reports.getHorizantalBar().click();
        
    })
    it.only('should prepare a piechart report',function()
    {
        cy.login(this.data.username,this.data.password);
        reports.getReport().click();
        reports.getCreateChart().click();
        reports.getPiechart().click();
       
    })
    })
    
})