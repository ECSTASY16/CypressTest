

class basePage
{
    verifyElementsOnPageWithText(btnText:string):void
    {
cy.contains(btnText).should("be.visible");
    }
  
    }
export default new basePage()