describe('Api testing with cypress',()=>
{
    it('Api testing',()=>
    {
        //cy.request(method,url,body)
        cy.request('POST','https://reqres.in/api/users',
        {
            "name": "morpheus",
            "job": "leader"
        }).then((response)=>
        {
            expect(response.body).to.have.property('name','morpheus');
            expect(response.status).to.eq(201);
        })


    })
})