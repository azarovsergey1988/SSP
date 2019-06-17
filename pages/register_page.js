const I = actor();

module.exports = {

    elements: {
        signinPage: 'https://account.bbc.com/register',                                                     // Register page URL
        ageOver13Button: '[class="buttons__wrapper"]>a:nth-child(2)',                                       // Button age over 13 years
        dayEntryField: '[id="day-input"]',                                                                  // Day entry field
        monthEntryField: '[id="month-input"]',                                                              // Month entry field
        yearEntryField: '[id="year-input"]',                                                                // Year entry field
        submitButton: '[id="submit-button"]',                                                               // Submit-button
        mailField: '[id="user-identifier-input"]',                                                          // Email Field
        passwordField: '[id="password-input"]',                                                             // Password Field
    },

    async goToSigninPagePage() {
        await I.amOnPage(this.elements.signinPage);
        await I.waitForText('What\'s this for?');
    },

    async clickOnAgeOver13Button() {
        await I.waitForElement(this.elements.ageOver13Button);
        await I.click(this.elements.ageOver13Button);
    },

    async inputInDayEntryField(value) {                                                                 // Input in Day entry field
        await I.waitForElement(this.elements.dayEntryField);
        await I.appendField(this.elements.dayEntryField, value);
    },

    async inputInMonthEntryField(value) {                                                                // Input in Month entry field
        await I.waitForElement(this.elements.monthEntryField);
        await I.appendField(this.elements.monthEntryField, value);
    },

    async inputInYearEntryField(value) {                                                                 // Input in Year entry field
        await I.waitForElement(this.elements.yearEntryField);
        await I.appendField(this.elements.yearEntryField, value);
    },

    async clickOnSubmitButton() {
        await I.waitForElement(this.elements.submitButton);
        await I.click(this.elements.submitButton);
    },

    async inputInEmailField(mail) {                                                                 // Input in Email Field
        await I.waitForElement(this.elements.mailField);
        await I.appendField(this.elements.mailField, mail);
    },

    async inputInPasswordField(pass) {                                                                 // Input in Password Field
        await I.waitForElement(this.elements.passwordField);
        await I.appendField(this.elements.passwordField, pass);
    },


};
