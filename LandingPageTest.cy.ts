import landingPage from "../support/pages/landingPage";
import basePage from "../support/pages/BasePage";

describe("Landing Page Test Cases",()=>{

    before("invoke Application",()=>{
        landingPage.invokeApp();
      
    })
    
    it("Check Button Texts on Landing Page",()=>{
       
        landingPage.VerifyBankName();
       
    })

    //Writing separate tests for each assertions

    it("verify Home button text",()=>{
        basePage.verifyElementsOnPageWithText("Home");
    })

    
    it("verify Customer Login  button text",()=>{
        basePage.verifyElementsOnPageWithText("Customer Login");
    })

    
    it("verify Bank Manager Login button text",()=>{
        basePage.verifyElementsOnPageWithText("Bank Manager Login");
    })
    
  
})
