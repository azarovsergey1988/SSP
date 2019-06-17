Feature('Register page');

BeforeSuite(async (register) => {    //
    await register.goToSigninPagePage();
});

Scenario('New User Registration', async(register) => {

    await register.clickOnAgeOver13Button();
    await register.inputInDayEntryField("10");
    await register.inputInMonthEntryField("10");
    await register.inputInYearEntryField("1990");
    await register.clickOnSubmitButton();
    await register.inputInEmailField("7958724@mail.ru");
    await register.inputInPasswordField("qwerty12345");
    await register.clickOnSubmitButton();

});