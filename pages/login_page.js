const I = actor();

module.exports = {

    elements: {
        loginPage: 'https://account.bbc.com/signin',                                                             // Login page URL
        enterButton: 'button[class="button button--full-width"]',                                                // Enter button on login page
        invalidDataEntryError: '[id="form-message-general"] [class="form-message__text"]',                       // Invalid data entry error message
        invalidNameEnteredError: '[class="form-message form-message--error form-message--username field__error"] [class="form-message__text"]',     // invalid name entered error
        invalidPasswordEnteredEntry: '[class="form-message form-message--error form-message--password field__error"] [class="form-message__text"]', // invalid password entered error

    },

    async goToLoginPage() {
        await I.amOnPage(this.elements.loginPage);
        await I.waitForText('Don’t have a BBC account?');
    },

    async clickOnTheEnterButton(){
        await I.waitForElement(this.elements.enterButton);
        await I.click(this.elements.enterButton);
    },

    async checkInvalidDataEntryError(){                                         // Check invalid name or password entered error exist
        await I.waitForElement(this.elements.invalidDataEntryError);
        await I.seeElementInDOM(this.elements.invalidDataEntryError);
    },

    async checkInvalidNameEnteredError(){                                        // Check invalid name entered error exist
        await I.waitForElement(this.elements.invalidNameEnteredError);
        await I.seeElementInDOM(this.elements.invalidNameEnteredError);
    },

    async checkInvalidPasswordEnteredEntry(){                                    // Check invalid password entered error exist
        await I.waitForElement(this.elements.invalidPasswordEnteredEntry);
        await I.seeElementInDOM(this.elements.invalidPasswordEnteredEntry);
    },


};
