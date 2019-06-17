Feature('Signin page test');

BeforeSuite(async (login_page) => {    //
    await login_page.goToLoginPage();
});

Scenario('Empty login and password fields', async(login_page) => {

   await login_page.clickOnTheEnterButton();
   await login_page.checkInvalidDataEntryError();        // Check invalid name or password entered error exist
   await login_page.checkInvalidNameEnteredError();      // Check invalid name entered error exist
   await login_page.checkInvalidPasswordEnteredEntry();       // Check invalid password entered error exist

});
