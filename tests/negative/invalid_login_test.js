Feature('Signin page test');

BeforeSuite(async (login_page) => {    //
    await login_page.goToLoginPage();
});

Scenario('Entered invalid e-mail', async(login_page) => {

    await login_page.inputInLoginField("qqq");
    await login_page.inputInPasswordField("qwerty12345");
    await login_page.clickOnTheEnterButton();
    await login_page.checkInvalidNameEnteredError();           // Check invalid name entered error exist

});
