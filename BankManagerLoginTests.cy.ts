import landingPage from "../../support/pages/landingPage"

describe("Verifying Bank manager Page ",()=>{

    beforeEach("invoke application and login as Bank Manager",()=>{

        landingPage.invokeApp();
        
    it("Verify buttons on Bank Manager Login Page",()=>
    {
   landingPage.loginAsManager();
})

})
})