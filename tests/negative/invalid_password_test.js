Feature('Signin page test');

BeforeSuite(async (login_page) => {    //
    await login_page.goToLoginPage();
});

Scenario('Entered invalid password', async(login_page) => {

    await login_page.inputInLoginField("7958724@mail.ru");
    await login_page.inputInPasswordField("qwerty54321");
    await login_page.clickOnTheEnterButton();
    await login_page.checkInvalidPasswordEnteredEntry();       // Check invalid password entered error exist

});
