class LandingPage
{
invokeApp():void
{
    cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/login");
}
VerifyBankName():void
{
    cy.contains("XYZ Bank").should("be.visible");
}

verifyButtonText(btnText:string):void
{
cy.contains(btnText).should("be.visible");
}
//Method for Clicking on the Bank Mangaer Login button 
loginAsManager():void
{
    cy.contains("Bank Manager Login").click();
}
}


// loginAsCustomer():void{
//     cy.contains("Customer Login").click();
// }



export default new LandingPage()