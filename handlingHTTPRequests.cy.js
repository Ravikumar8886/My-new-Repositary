describe('handling of http requests',()=>
{
    it('modifying responses',()=>
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        //cy.get('.btn.btn-primary').click();
       //cy.intercept({requests},{responses});
                    //requests
       cy.intercept({
            method:'GET',
            //this link from inspect>network>unser 'Name'click on one row
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
             },
             //modifying responces
            {
            statuscode:200,
            body:[{"book_name":"RestAssured with Java",
                    "isbn":"RSU",
                    "aisle":"2301"}]
            }).as('dbresponse')
            cy.get('.btn.btn-primary').click();
            
            cy.wait("@dbresponse")

    })
})