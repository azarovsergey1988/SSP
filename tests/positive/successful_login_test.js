Feature('Signin page test');

BeforeSuite(async (login_page) => {    //
    await login_page.goToLoginPage();
});

Scenario('Successful login', async(login_page, bbc_page) => {

    await login_page.inputInLoginField("7958724@mail.ru");
    await login_page.inputInPasswordField("qwerty12345");
    await login_page.clickOnTheEnterButton();
    await bbc_page.checkBBCPage();                                 // Сheck on the page www.bbc.com
});
