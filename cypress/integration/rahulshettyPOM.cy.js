import HomePage from '../POM1/homePage.cy'
import ShopPage from '../POM1/shopPage.cy'

const hp= new HomePage()
describe('create frame work',function(){

    before("before", function(){
        cy.fixture('example').then(function(value){
            console.log(JSON.stringify(value));
             this.value=value;
        })
    })

    it('working on homepage of rahulshetty',function(){
        
        hp.getVisit(this.value.rsUrl) 
        hp.getName().type(this.value.name)
        hp.getName().should('have.attr','minlength','2')
        hp.getMail().type(this.value.mail)
        hp.getGender().select(this.value.gender)
        hp.getTwoName().should('have.value',this.value.name)
        hp.getDesabledRadio().should('be.disabled')

       var sp=new ShopPage()
        sp.getShopBtn().click()

        //to iterate the multiple products from the fixtuers
        this.value.products.forEach((prodName)=>
        {
            cy.toSelectMob(prodName)
        })
        
        sp.getCheckOutBtn().click()
        sp.getSecCheckout().click()
        sp.getDeliveryLoc().type('Ind')
        cy.pause()
        sp.getEnterdCountry().click()
        sp.getCheckBx().click()
        sp.toPurchage().click()

    })
})